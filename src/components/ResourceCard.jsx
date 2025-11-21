import { useState } from "react";
import EditResourceModal from "./EditResourceModal";
import { apiRequest } from "../api";

export default function ResourceCard({ resource, refresh }) {
  const [showEdit, setShowEdit] = useState(false);

  const deleteResource = async () => {
    if (!confirm("Are you sure you want to delete this resource?")) return;

    await apiRequest(`/resource/delete/${resource.id}`, "DELETE");
    refresh(); // reload list
  };

  return (
    <div className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-blue-400 transition relative">

      <h3 className="text-xl font-semibold">{resource.title}</h3>

      <a
        href={resource.link}
        target="_blank"
        className="text-blue-400 underline block mt-2"
      >
        Open Resource →
      </a>

      <p className="text-gray-400 mt-2">
        Category: {resource.category || "None"}
      </p>

      <p className="text-gray-500">Status: {resource.status || "Not set"}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded-lg"
          onClick={() => setShowEdit(true)}
        >
          Edit
        </button>

        <button
          className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-lg"
          onClick={deleteResource}
        >
          Delete
        </button>
      </div>

      {/* Edit Modal */}
      {showEdit && (
        <EditResourceModal
          resource={resource}
          close={() => setShowEdit(false)}
          refresh={refresh}
        />
      )}
    </div>
  );
}
