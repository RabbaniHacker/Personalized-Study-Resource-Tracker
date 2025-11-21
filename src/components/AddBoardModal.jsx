import { useState } from "react";

export default function AddBoardModal({ close, addBoard }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function submitBoard() {
    if (!name.trim()) return alert("Enter Board Name");

    addBoard({ name, description });
    close();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-blue-300">Create New Board</h2>

        <input
          type="text"
          placeholder="Board Name"
          className="w-full px-3 py-2 rounded mb-3 bg-gray-700 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Short description (optional)"
          className="w-full px-3 py-2 rounded mb-3 bg-gray-700 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={close} className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-500">
            Cancel
          </button>
          <button
            onClick={submitBoard}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
