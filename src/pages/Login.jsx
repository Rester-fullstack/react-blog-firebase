import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (error) {
      setErro("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-slate-900 via-slate-800 to-black">

      <form
        onSubmit={handleLogin}
        className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl 
                   w-80 flex flex-col gap-4 shadow-2xl 
                   hover:shadow-green-500/20 transition-all duration-300"
      >
        <h2 className="text-white text-3xl font-bold text-center">
          🔐 Login
        </h2>

        {erro && (
          <p className="text-red-400 text-sm text-center">
            {erro}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-xl bg-slate-700 text-white 
                     outline-none focus:ring-2 focus:ring-green-500 transition"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="p-3 rounded-xl bg-slate-700 text-white 
                     outline-none focus:ring-2 focus:ring-green-500 transition"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          disabled={loading}
          className="bg-green-500 hover:bg-green-600 p-3 rounded-xl 
                     text-white font-bold transition-all duration-300 
                     hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export default Login;