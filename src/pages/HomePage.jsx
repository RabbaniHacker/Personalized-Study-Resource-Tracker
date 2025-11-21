export default function HomePage({ openBoard, boards, fetchBoards }) {
  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-6">Your Boards</h2>

      <button
        onClick={() => openBoard(null, true)}
        className="bg-blue-600 px-4 py-2 rounded-lg mb-6"
      >
        + Add Board
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {boards.map((b) => (
          <div
            key={b.id}
            onClick={() => openBoard(b)}
            className="bg-gray-800 p-6 rounded-xl cursor-pointer hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold">{b.name}</h3>
            <p className="text-gray-400">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
