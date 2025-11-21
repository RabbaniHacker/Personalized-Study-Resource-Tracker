import { useState } from "react";

export default function AddResourceModal({ close, addResource }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-96">

        <h2 className="text-xl font-semibold mb-4">Add Resource</h2>

        <input
          className="input"
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="input mt-3"
          placeholder="Resource Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <input
          className="input mt-3"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          className="input mt-3"
          placeholder="Status (optional)"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">

          <button
            className="px-4 py-2 bg-gray-600 rounded-lg"
            onClick={close}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 rounded-lg"
            onClick={() => {
              addResource({ title, link, category, status });
            }}
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
}
