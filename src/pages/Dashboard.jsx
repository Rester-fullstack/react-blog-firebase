import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Dashboard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const loadPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("uid", "==", user.uid));

      const snapshot = await getDocs(q);

      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(lista);
    };

    loadPosts();
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Tem certeza que deseja excluir?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "posts", id));
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const formatName = (name) => {
    if (!name) return "Usuário";
    return name.includes("@") ? name.split("@")[0] : name;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-6">📊 Meus Posts</h2>

      {posts.length === 0 && (
        <p className="text-gray-400">Você ainda não criou posts</p>
      )}

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl mb-5 
                       shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-green-400">{post.title}</h3>
            <p className="mt-3 text-gray-300 line-clamp-2">{post.body}</p>

            <p className="text-sm text-gray-400 mt-2">
              ✍️ por {formatName(post.createdBy)} em{" "}
              {post.createdAt?.seconds
                ? new Date(post.createdAt.seconds * 1000).toLocaleString("pt-BR")
                : "data não disponível"}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl 
                           transition-all duration-300 hover:scale-105"
              >
                ❌ Excluir
              </button>

              <button
                onClick={() => navigate(`/edit/${post.id}`)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-xl 
                           transition-all duration-300 hover:scale-105"
              >
                ✏️ Editar
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Dashboard;