from flask import Flask
from flask_cors import CORS
from models.models import db
from routes.board_routes import board_bp
from routes.resource_routes import resource_bp
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app)  # allow cross origin

# Use a secret key for JWT tokens - change this to a secure random key
app.config["SECRET_KEY"] = "ae2f9fe9df2b4ace8a3abb67d9c88df82dc6a1f3b2e09f9d823faddea2791bf8" 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()
    print("Database created successfully!")

# Register blueprints with prefixes
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(board_bp, url_prefix="/api/boards")
app.register_blueprint(resource_bp, url_prefix="/api/resources")

@app.route("/")
def home():
    return "Backend Running!"

if __name__ == "__main__":
    app.run(debug=True)
