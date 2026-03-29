import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-pink-100">
      <motion.h1
        className="text-2xl md:text-4xl text-pink-600 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Preparing something special... 💖
      </motion.h1>
    </div>
  );
}