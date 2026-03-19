import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("createdAt", "desc"));

      const snapshot = await getDocs(q);

      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(lista);
    };

    loadPosts();
  }, []);

  const formatName = (name) => {
    if (!name) return "Usuário";
    return name.includes("@") ? name.split("@")[0] : name;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-6">📰 Posts</h2>

      {posts.length === 0 && (
        <p className="text-gray-400">Nenhum post encontrado</p>
      )}

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/post/${post.id}`)}
            className="bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl mb-5 
                      cursor-pointer shadow-lg hover:shadow-2xl 
                      hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-green-400">{post.title}</h3>

            <p className="mt-3 text-gray-300 line-clamp-3">{post.body}</p>

            <p className="text-sm text-gray-400 mt-4">
              ✍️ por {formatName(post.createdBy)}{" "}
              {post.createdAt?.seconds
                ? `em ${new Date(post.createdAt.seconds * 1000).toLocaleString(
                    "pt-BR"
                  )}`
                : ""}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Home;