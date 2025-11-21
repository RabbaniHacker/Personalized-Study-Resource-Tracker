from functools import wraps
from flask import request, jsonify, current_app, g
import jwt
from models.models import User

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        header = request.headers.get("Authorization", None)
        if not header:
            return jsonify({"message": "Token is missing"}), 401

        parts = header.split()
        if len(parts) != 2 or parts[0].lower() != "bearer":
            return jsonify({"message": "Token malformed"}), 401

        token = parts[1]
        try:
            data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
            user = User.query.get(data["user_id"])
            if not user:
                return jsonify({"message": "User not found"}), 401
            # set g.current_user so routes can use it
            from flask import g
            g.current_user = user
        except jwt.ExpiredSignatureError:
            return jsonify({"message": "Token expired"}), 401
        except Exception as e:
            return jsonify({"message": "Token invalid", "error": str(e)}), 401

        return f(*args, **kwargs)
    return decorated
