import { useState } from "react";

export default function AddResourceModal({ close, addResource }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("Video");
  const [status, setStatus] = useState("To Do");

  const submit = () => {
    addResource({ title, link, type, status });
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-xl w-96 border border-gray-700">

        <h2 className="text-xl font-bold mb-4 text-blue-300">Add Resource</h2>

        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-3"
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-3"
          placeholder="Resource Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <select
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Video</option>
          <option>Article</option>
          <option>Practice</option>
        </select>

        <select
          className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-3"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <div className="flex justify-between mt-4">
          <button
            onClick={close}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Add Resource
          </button>
        </div>

      </div>
    </div>
  );
}
