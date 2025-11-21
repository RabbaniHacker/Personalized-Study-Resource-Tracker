import { useState } from "react";

export default function LoginPage({ onLogin, goToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: email,
          password: password 
        })
      });

      const data = await res.json();

      if (data.token) {
        // Save token
        localStorage.setItem("token", data.token);
        // Call parent login handler
        onLogin();
      } else {
        alert(data.message || "Login failed");
      }

    } catch (err) {
      alert("Error connecting to server");
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          placeholder="Enter Email"
          className="w-full p-3 rounded bg-gray-700 mb-4 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded bg-gray-700 mb-4 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg text-lg"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={goToSignup}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
