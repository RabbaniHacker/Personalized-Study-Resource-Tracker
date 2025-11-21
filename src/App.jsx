import { useState } from "react";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showSignup, setShowSignup] = useState(false);
  const [currentBoard, setCurrentBoard] = useState(null);

  // Save token after login
  function handleLogin() {
    const t = localStorage.getItem("token");
    setToken(t);
  }

  // After signup → go to login page
  function handleSignupSuccess() {
    setShowSignup(false);
  }

  // If no token → show login or signup
  if (!token) {
    return showSignup ? (
      <SignupPage
        onSignupSuccess={handleSignupSuccess}
      />
    ) : (
      <LoginPage
        onLogin={handleLogin}
        goToSignup={() => setShowSignup(true)}
      />
    );
  }

  // Logged in → show boards or resource page
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!currentBoard ? (
        <HomePage openBoard={setCurrentBoard} />
      ) : (
        <ResourcePage
          board={currentBoard}
          goBack={() => setCurrentBoard(null)}
        />
      )}
    </div>
  );
}
