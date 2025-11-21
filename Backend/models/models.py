from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Board(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    description = db.Column(db.String(500))

    def to_dict(self):
        return {"id": self.id, "name": self.name, "description": self.description}


class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200))
    link = db.Column(db.String(500))
    category = db.Column(db.String(50))
    status = db.Column(db.String(50))
    board_id = db.Column(db.Integer, db.ForeignKey('board.id'))

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "link": self.link,
            "category": self.category,
            "status": self.status,
            "board_id": self.board_id,
        }
