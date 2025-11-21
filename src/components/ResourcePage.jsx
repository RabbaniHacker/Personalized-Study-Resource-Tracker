import { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import AddResourceModal from "./AddResourceModal";

export default function ResourcePage({ board, goBack }) {
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔥 Base URL of your Flask backend
  const API = "http://127.0.0.1:5000/api";

  // ⭐ Fetch resources when board is opened
  async function fetchResources() {
    try {
      const res = await fetch(`${API}/resources/by-board/${board.id}`);
      const data = await res.json();
      setResources(data);
    } catch (err) {
      console.error("Error fetching resources:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchResources();
  }, [board]);

  // ⭐ Add new resource
  async function addResourceToBackend(data) {
    const payload = { ...data, board_id: board.id };

    const res = await fetch(`${API}/resources/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const newData = await res.json();

    // Add new resource to UI
    setResources([...resources, newData.resource]);
  }

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={goBack}
        className="px-4 py-2 mb-4 bg-gray-700 rounded-lg hover:bg-gray-600"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4 text-blue-300">
        {board.title}
      </h2>

      {/* Add Resource Button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg mb-4"
      >
        + Add Resource
      </button>

      {/* Modal */}
      {showModal && (
        <AddResourceModal
          close={() => setShowModal(false)}
          addResource={addResourceToBackend}
        />
      )}

      {/* Loading */}
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}
