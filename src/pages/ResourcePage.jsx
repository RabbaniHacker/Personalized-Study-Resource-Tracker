import { useState, useEffect } from "react";
import ResourceCard from "../components/ResourceCard";
import AddResourceModal from "../components/AddResourceModal";

export default function ResourcePage({ board, goBack, token }) {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/resource/by-board/${board.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => r.json())
      .then((data) => setResources(data));
  }, [board, token]);

  return (
    <div>
      <button
        onClick={goBack}
        className="px-4 py-2 mb-4 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-300">{board.name}</h2>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg mb-4"
      >
        + Add Resource
      </button>

      {showModal && (
        <AddResourceModal
          close={() => setShowModal(false)}
          addResource={(data) => setResources([...resources, data])}
          boardId={board.id}
          token={token}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>
    </div>
  );
}
