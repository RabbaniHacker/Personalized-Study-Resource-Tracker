import { useState } from "react";
import ResourceCard from "./ResourceCard";
import AddResourceModal from "./AddResourceModal";

export default function ResourcePage({ board, goBack }) {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={goBack}
        className="px-4 py-2 mb-4 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-300">{board.title}</h2>

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
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((r, i) => (
          <ResourceCard key={i} resource={r} />
        ))}
      </div>
    </div>
  );
}
