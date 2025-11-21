import { useState } from "react";
import Navbar from "./components/Navbar";
import BoardCard from "./components/BoardCard";
import ResourcePage from "./components/ResourcePage";

export default function App() {
  const [currentBoard, setCurrentBoard] = useState(null);

  const boards = [
    { title: "DSA", description: "Data Structures & Algorithms" },
    { title: "Web Dev", description: "Frontend + Backend" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar />

      <div className="p-8">
        {!currentBoard && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Your Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boards.map((b, i) => (
                <BoardCard key={i} board={b} openBoard={setCurrentBoard} />
              ))}
            </div>
          </>
        )}

        {currentBoard && (
          <ResourcePage board={currentBoard} goBack={() => setCurrentBoard(null)} />
        )}
      </div>
    </div>
  );
}
