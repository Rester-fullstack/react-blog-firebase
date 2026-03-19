import { useState } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const navigate = useNavigate();

  const nomeUsuario = user.displayName || (user.email ? user.email.split("@")[0] : "Usuário");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "posts"), {
        title,
        body,
        uid: user.uid,
        createdBy: nomeUsuario,
        createdAt: serverTimestamp(), // vai ser preenchido automaticamente
      });

      // limpa form
      setTitle("");
      setBody("");

      // redireciona
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-2xl bg-slate-800/80 backdrop-blur-md 
                      p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          📝 Criar Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Digite o título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-xl bg-slate-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            placeholder="Digite o conteúdo..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="6"
            className="p-3 rounded-xl bg-slate-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          />

          <button
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-xl 
                      font-semibold transition-all duration-300 
                      hover:scale-105 shadow-md disabled:opacity-50"
          >
            {loading ? "Criando..." : "Criar Post"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreatePost;