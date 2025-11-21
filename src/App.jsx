import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BoardCard from "./components/BoardCard";
import ResourcePage from "./components/ResourcePage";

export default function App() {
  const [boards, setBoards] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(null);

  // Load boards from backend (STEP 2)
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/boards/all")
      .then((res) => res.json())
      .then((data) => setBoards(data))
      .catch((err) => console.log("Error fetching boards:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="p-8">
        {/* Board List */}
        {!currentBoard && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Your Boards</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boards.map((b) => (
                <BoardCard
                  key={b.id}
                  board={b}
                  openBoard={setCurrentBoard}
                />
              ))}
            </div>
          </>
        )}

        {/* Resource Page */}
        {currentBoard && (
          <ResourcePage
            board={currentBoard}
            goBack={() => setCurrentBoard(null)}
          />
        )}
      </div>
    </div>
  );
}
