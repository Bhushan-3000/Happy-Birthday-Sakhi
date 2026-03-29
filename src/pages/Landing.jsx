// import { useState } from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Landing() {
  const [showText, setShowText] = useState(false);
  const audioRef = useRef(null);

  const handleReveal = () => {
    setShowText(true);
    audioRef.current.volume = 0.4;
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });

    audioRef.current.play();
  };

  return (
    
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
<audio ref={audioRef} loop>
  <source src="/src/assets/songs/song.mp3" type="audio/mp3" />
</audio>
      {/* 💖 Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-400 text-xl"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: 1 }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            💖
          </motion.span>
        ))}
      </div>

      {!showText ? (
        <motion.button
          onClick={handleReveal}
          className="px-10 py-4 bg-black text-white rounded-full text-lg shadow-xl hover:scale-105 transition"
          whileTap={{ scale: 0.9 }}
        >
          Tap for Surprise 🎁
        </motion.button>
      ) : (
        <>
          {/* 🎂 MAIN TITLE */}
          <motion.h1
            className="text-5xl md:text-7xl font-[Pacifico] text-pink-600 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Happy Birthday Sakhi 💖
          </motion.h1>

          {/* ✨ SUBTEXT */}
          <motion.p
            className="mt-4 text-gray-700 italic text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            “A small surprise for someone special…” 💫
          </motion.p>

          {/* 💌 BUTTON */}
          <motion.button
            onClick={() =>
              document.getElementById("message").scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-10 px-8 py-3 bg-pink-500 text-white rounded-full shadow-xl hover:bg-pink-600 hover:scale-105 transition duration-300 active:scale-95"
            whileTap={{ scale: 0.9 }}
          >
            Enter 💌
          </motion.button>
<button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }}
  className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg"
>
  🎶
</button>

        </>
      )}
    </div>
  );
}