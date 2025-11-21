from flask import Blueprint, request, jsonify, g
from models.models import db, Resource, Board
from routes.auth_decorators import token_required

resource_bp = Blueprint("resource_bp", __name__)

@resource_bp.route("/create", methods=["POST"])
@token_required
def create_resource():
    data = request.json
    board = Board.query.get(data["board_id"])

    if not board or board.user_id != g.current_user.id:
        return {"message": "Board not found or unauthorized"}, 404

    new_r = Resource(
        title=data["title"],
        link=data["link"],
        category=data.get("category", ""),
        status=data.get("status", ""),
        board_id=data["board_id"]
    )

    db.session.add(new_r)
    db.session.commit()
    return {"message": "Resource created", "resource": new_r.to_dict()}


@resource_bp.route("/by-board/<int:board_id>", methods=["GET"])
@token_required
def get_resources(board_id):
    board = Board.query.get(board_id)

    if not board or board.user_id != g.current_user.id:
        return {"message": "Board not found or unauthorized"}, 404

    resources = Resource.query.filter_by(board_id=board_id).all()
    return jsonify([r.to_dict() for r in resources])


@resource_bp.route("/edit/<int:resource_id>", methods=["PUT"])
@token_required
def edit_resource(resource_id):
    resource = Resource.query.get(resource_id)

    if not resource:
        return {"message": "Resource not found"}, 404

    board = Board.query.get(resource.board_id)

    if board.user_id != g.current_user.id:
        return {"message": "Unauthorized"}, 403

    data = request.json

    resource.title = data.get("title", resource.title)
    resource.link = data.get("link", resource.link)
    resource.category = data.get("category", resource.category)
    resource.status = data.get("status", resource.status)

    db.session.commit()
    return {"message": "Resource updated", "resource": resource.to_dict()}


@resource_bp.route("/delete/<int:resource_id>", methods=["DELETE"])
@token_required
def delete_resource(resource_id):
    resource = Resource.query.get(resource_id)

    if not resource:
        return {"message": "Resource not found"}, 404

    board = Board.query.get(resource.board_id)

    if board.user_id != g.current_user.id:
        return {"message": "Unauthorized"}, 403

    db.session.delete(resource)
    db.session.commit()

    return {"message": "Resource deleted", "deleted_id": resource_id}
