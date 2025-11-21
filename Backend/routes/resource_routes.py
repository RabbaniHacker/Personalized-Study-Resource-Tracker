from flask import Blueprint, request, jsonify
from models.models import db, Resource

resource_bp = Blueprint("resource_bp", __name__)

# Create a resource
@resource_bp.route("/create", methods=["POST"])
def create_resource():
    data = request.json
    new_r = Resource(
        title=data["title"],
        link=data["link"],
        category=data["category"],
        status=data["status"],
        board_id=data["board_id"]
    )

    db.session.add(new_r)
    db.session.commit()
    return {"message": "Resource created", "resource": new_r.to_dict()}


# ⭐ GET RESOURCES BY BOARD ID (the missing route)
@resource_bp.route("/by-board/<int:board_id>", methods=["GET"])
def get_resources_by_board(board_id):
    resources = Resource.query.filter_by(board_id=board_id).all()
    return jsonify([r.to_dict() for r in resources])
