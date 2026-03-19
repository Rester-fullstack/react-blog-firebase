import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      }
    };

    loadPost();
  }, [id]);

  // 🔄 loading bonito
  if (!post) {
    return (
      <div className="flex justify-center mt-10 text-gray-400">
        Carregando post...
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl bg-slate-800/80 backdrop-blur-md 
                   p-8 rounded-2xl shadow-2xl"
      >
        
        <h2 className="text-4xl font-bold text-green-400 mb-6">
          {post.title}
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          {post.body}
        </p>

        <span>✍️ {post.createdBy}</span>

        <span>
          📅 {post.createdAt
            ? new Date(post.createdAt.seconds * 1000).toLocaleDateString()
            : ""}
        </span>

      </motion.div>

    </div>
  );
}

export default Post;