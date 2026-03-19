import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //  carregar post
  useEffect(() => {
    const loadPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTitle(docSnap.data().title);
        setBody(docSnap.data().body);
      }
    };

    loadPost();
  }, [id]);

  //  atualizar
  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "posts", id);

    await updateDoc(docRef, {
      title,
      body,
    });

    alert("Post atualizado!");
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      
      <div className="w-full max-w-2xl bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          ✏️ Editar Post
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Digite o título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-3 rounded-xl bg-slate-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-green-500
                      transition"
          />

          <textarea
            placeholder="Digite o conteúdo..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="6"
            className="p-3 rounded-xl bg-slate-700 text-white 
                      focus:outline-none focus:ring-2 focus:ring-green-500
                      transition resize-none"
          />

          <button
            className="bg-green-500 hover:bg-green-600 px-4 py-3 rounded-xl 
                      font-semibold transition-all duration-300 
                      hover:scale-105 shadow-md"
          >
            Atualizar Post
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditPost;