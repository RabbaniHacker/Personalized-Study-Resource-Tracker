from flask import Blueprint, request, jsonify
from models.models import db, Board

board_bp = Blueprint("board_bp", __name__)

@board_bp.route("/create", methods=["POST"])
def create_board():
    data = request.json
    new_board = Board(name=data["name"], description=data["description"])
    db.session.add(new_board)
    db.session.commit()
    return {"message": "Board created", "board": new_board.to_dict()}

@board_bp.route("/all", methods=["GET"])
def get_boards():
    boards = Board.query.all()
    return jsonify([b.to_dict() for b in boards])

@board_bp.route("/delete/<int:board_id>", methods=["DELETE"])
def delete_board(board_id):
    board = Board.query.get(board_id)

    if not board:
        return {"message": "Board not found"}, 404

    db.session.delete(board)
    db.session.commit()

    return {"message": "Board deleted successfully", "deleted_id": board_id}
