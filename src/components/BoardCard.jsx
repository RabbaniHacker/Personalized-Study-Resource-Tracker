export default function BoardCard({ board, openBoard }) {
  return (
    <div
      onClick={() => openBoard(board)}
      className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-blue-400 hover:shadow-blue-500/30 transition cursor-pointer"
    >
      <h2 className="text-xl font-semibold">{board.title}</h2>
      <p className="text-gray-400 mt-2">{board.description}</p>
    </div>
  );
}
