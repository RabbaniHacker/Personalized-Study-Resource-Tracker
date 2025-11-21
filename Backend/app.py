from flask import Flask
from flask_cors import CORS
from models.models import db
from routes.board_routes import board_bp
from routes.resource_routes import resource_bp

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()
    print("Database created successfully!")

# Register Blueprints
app.register_blueprint(board_bp, url_prefix="/api/boards")
app.register_blueprint(resource_bp, url_prefix="/api/resources")


@app.route("/")
def home():
    return {"message": "Backend Running!"}


if __name__ == "__main__":
    app.run(debug=True)
