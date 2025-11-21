import { useState } from "react";

export default function BoardCard({ board, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(board.name);
  const [desc, setDesc] = useState(board.description);

  // Go to resource page
  const openBoard = () => {
    localStorage.setItem("currentBoard", JSON.stringify(board));
    window.location.href = "/resources"; 
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition">
      {isEditing ? (
        <>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="input mt-3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <div className="flex gap-3 mt-4">
            <button
              className="px-4 py-2 bg-gray-600 rounded-lg"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 bg-blue-600 rounded-lg"
              onClick={() => {
                onEdit(board.id, name, desc);
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold">{board.name}</h3>
          <p className="text-gray-400 mt-2">{board.description}</p>

          <div className="flex justify-end gap-3 mt-4">
            <button
              className="px-3 py-1 bg-gray-600 rounded-lg"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              className="px-3 py-1 bg-red-600 rounded-lg"
              onClick={onDelete}
            >
              Delete
            </button>

            <button
              className="px-3 py-1 bg-blue-600 rounded-lg"
              onClick={openBoard}
            >
              Open
            </button>
          </div>
        </>
      )}
    </div>
  );
}
