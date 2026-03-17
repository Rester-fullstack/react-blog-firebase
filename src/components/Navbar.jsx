import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-800 shadow-lg px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-green-400">
        Meu Sistema
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="hover:text-green-400 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="hover:text-green-400 transition"
        >
          Dashboard
        </button>

        <button
          onClick={() => navigate("/login")}
          className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded transition"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;