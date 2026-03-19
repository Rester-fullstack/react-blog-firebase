import { useState } from "react";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

function Search() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    const postsRef = collection(db, "posts");
    const snapshot = await getDocs(postsRef);

    const lista = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(post => post.title.toLowerCase().includes(search.toLowerCase()));

    setPosts(lista);
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-6">🔍 Buscar Posts</h2>

      <form onSubmit={handleSearch} className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Digite o título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-xl bg-slate-700 text-white 
                     focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <button
          className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl 
                     font-semibold transition-all duration-300 
                     hover:scale-105 shadow-md"
        >
          Buscar
        </button>
      </form>

      {posts.length === 0 && (
        <p className="text-gray-400">Nenhum resultado encontrado</p>
      )}

      <AnimatePresence>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl mb-4 
                       shadow-lg transition-all duration-300 
                       hover:shadow-2xl hover:scale-[1.01] cursor-pointer"
          >
            <h3 className="text-xl font-bold text-green-400">{post.title}</h3>
            <p className="mt-2 text-gray-300 line-clamp-2">{post.body}</p>
            <p className="text-sm text-gray-400 mt-2">
              ✍️ por {post.createdBy}{" "}
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

export default Search;