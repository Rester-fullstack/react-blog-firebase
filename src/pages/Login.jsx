import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-xl w-80 flex flex-col gap-4 shadow-2xl hover:shadow-green-500/20 transition">
      
        <h2 className="text-white text-2xl font-bold text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-slate-700 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="p-2 rounded bg-slate-700 text-white outline-none"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="bg-green-500 hover:bg-green-600 p-2 rounded text-white font-bold transition">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;