import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthentication";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { logout } = useAuthentication();

  return (
    <nav className="bg-slate-800/80 backdrop-blur-md shadow-lg px-6 py-4 
                flex justify-between items-center sticky top-0 z-50">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold text-green-400 cursor-pointer"
      >
        Meu Sistema
      </h1>

      <div className="flex gap-4 items-center">
        <button
         onClick={() => navigate("/search")}
         className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
           transition-all duration-300 hover:scale-105 shadow-md"
        >
         Buscar
        </button>

        <button
          onClick={() => navigate("/")}
         className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
           transition-all duration-300 hover:scale-105 shadow-md"
        >
          Home
        </button>

        {user && (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
               transition-all duration-300 hover:scale-105 shadow-md"
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate("/create")}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
               transition-all duration-300 hover:scale-105 shadow-md"
            >
              Novo Post
            </button>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
                transition-all duration-300 hover:scale-105 shadow-md"
            >
              Sair
            </button>
          </>
        )}

        {!user && (
          <button
            onClick={() => navigate("/login")}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
              transition-all duration-300 hover:scale-105 shadow-md"
          >
            Login
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;