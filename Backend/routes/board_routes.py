from flask import Blueprint, request, jsonify, g
from models.models import db, Board
from routes.auth_decorators import token_required

board_bp = Blueprint("board_bp", __name__)


# ---------------------------
# CREATE BOARD (Authenticated)
# ---------------------------
@board_bp.route("/create", methods=["POST"])
@token_required
def create_board():
    data = request.json

    new_board = Board(
        name=data["name"],
        description=data.get("description", ""),
        user_id=g.current_user.id
    )
    db.session.add(new_board)
    db.session.commit()

    return {
        "message": "Board created",
        "board": new_board.to_dict()
    }, 201


# ---------------------------
# GET ALL BOARDS FOR USER
# ---------------------------
@board_bp.route("/all", methods=["GET"])
@token_required
def get_boards():
    boards = Board.query.filter_by(user_id=g.current_user.id).all()
    return jsonify([b.to_dict() for b in boards])


# ---------------------------
# DELETE BOARD
# ---------------------------
@board_bp.route("/delete/<int:board_id>", methods=["DELETE"])
@token_required
def delete_board(board_id):
    board = Board.query.get(board_id)

    if not board or board.user_id != g.current_user.id:
        return {"message": "Board not found or unauthorized"}, 404

    db.session.delete(board)
    db.session.commit()

    return {"message": "Board deleted successfully", "deleted_id": board_id}


# ---------------------------
# EDIT BOARD
# ---------------------------
@board_bp.route("/edit/<int:board_id>", methods=["PUT"])
@token_required
def edit_board(board_id):
    board = Board.query.get(board_id)

    if not board or board.user_id != g.current_user.id:
        return {"message": "Board not found or unauthorized"}, 404

    data = request.json
    board.name = data.get("name", board.name)
    board.description = data.get("description", board.description)

    db.session.commit()

    return {
        "message": "Board updated",
        "board": board.to_dict()
    }
