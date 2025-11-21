export default function ResourceCard({ resource }) {
  return (
    <div className="p-4 bg-gray-800 border border-gray-700 rounded-xl hover:border-blue-400 transition">
      <h3 className="text-lg font-semibold">{resource.title}</h3>

      <p className="text-gray-400 text-sm">{resource.type}</p>

      <a
        href={resource.link}
        target="_blank"
        className="text-blue-400 hover:underline mt-2 block"
      >
        Open Resource →
      </a>

      <p className="mt-2 text-sm">
        <span className="text-gray-400">Status: </span>
        <span className="font-medium">{resource.status}</span>
      </p>
    </div>
  );
}
