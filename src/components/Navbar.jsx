export default function Navbar({ onLoginClick, onSignupClick, isLoggedIn, onLogout }) {
  return (
    <nav className="w-full px-8 py-4 bg-gray-900 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-400">
        Study Resource Tracker
      </h1>

      <div className="flex gap-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Login
            </button>

            <button
              onClick={onSignupClick}
              className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-500"
            >
              Signup
            </button>
          </>
        ) : (
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
