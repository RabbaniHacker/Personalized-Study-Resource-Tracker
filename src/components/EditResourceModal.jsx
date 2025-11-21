import { useState } from "react";
import { apiRequest } from "../api";

export default function EditResourceModal({ resource, close, refresh }) {
  const [title, setTitle] = useState(resource.title);
  const [link, setLink] = useState(resource.link);
  const [category, setCategory] = useState(resource.category);
  const [status, setStatus] = useState(resource.status);

  const save = async () => {
    await apiRequest(`/resource/edit/${resource.id}`, "PUT", {
      title,
      link,
      category,
      status,
    });
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-96">

        <h2 className="text-xl font-semibold mb-4">Edit Resource</h2>

        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input className="input mt-3" value={link} onChange={(e) => setLink(e.target.value)} />

        <input className="input mt-3" value={category} onChange={(e) => setCategory(e.target.value)} />

        <input className="input mt-3" value={status} onChange={(e) => setStatus(e.target.value)} />

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 bg-gray-600 rounded-lg" onClick={close}>
            Cancel
          </button>

          <button className="px-4 py-2 bg-blue-600 rounded-lg" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
