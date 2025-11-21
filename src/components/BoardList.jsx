import BoardCard from "./BoardCard";
import { useState } from "react";

export default function BoardList({ onSelectBoard }) {
  const [boards, setBoards] = useState([
    { id: 1, title: "DSA", description: "Data Structures & Algorithms" },
    { id: 2, title: "Web Dev", description: "Frontend + Backend" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Your Boards</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boards.map((b) => (
          <BoardCard key={b.id} board={b} onSelectBoard={onSelectBoard} />
        ))}
      </div>
    </div>
  );
}
