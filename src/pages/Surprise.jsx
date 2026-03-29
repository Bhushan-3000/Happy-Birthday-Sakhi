import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Surprise() {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(true);

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  return (
  <div
    id="surprise"
    className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300"
  >
    {!revealed ? (
      <motion.button
        onClick={handleClick}
        className="px-10 py-4 bg-black text-white rounded-full text-lg shadow-xl hover:scale-105 transition"
        whileTap={{ scale: 0.9 }}
      >
        Do NOT click 👀
      </motion.button>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg max-w-2xl w-full px-10 py-10 rounded-3xl shadow-xl border border-white/40 space-y-6"
      >
        {/* 🎉 Title */}
        <h2 className="text-4xl md:text-5xl font-[Pacifico] text-pink-600 drop-shadow-sm">
          Surprise 🎉
        </h2>

        {/* ✨ Divider */}
        <div className="w-16 h-1 bg-pink-400 mx-auto rounded-full"></div>

        {/* 💌 Message */}
        <div className="text-gray-800 text-lg leading-relaxed space-y-4">
          <p>
            I knew you would… you’re too curious to ignore things like this 😭
          </p>

          <p>
            But yeah… no big dramatic twist here 😌
          </p>

          <p>
            This whole thing was just my way of doing something a little different…
            something you wouldn’t expect.
          </p>

          <p>
            Because honestly… you deserve more than just a
            <span className="font-semibold"> “HAPPY BIRTHDAY” </span> text.
          </p>

          <p className="text-pink-500 font-semibold">
            You deserve effort. 💫
          </p>

          <p>
            I just hope this made you smile… even a little bit 💖  
            and reminded you how special you are.
          </p>

          <p>
            Stay exactly the way you are — chaotic, calm, and completely you. ✨
          </p>

          <p>
            And yeah… I’m always here for you.
          </p>

          <p>
            I hope this year brings you everything you deserve —
            happiness, peace, and all the good things ✨
          </p>

          <p className="font-semibold">
            — Happiest Birthday Sakhi!!! 🎂🥂💌
          </p>
        </div>

        {/* 💌 Button */}
        <button
          onClick={() =>
            document.getElementById("ending")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mx-auto mt-4 block px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition duration-300 active:scale-95"
        >
          One last thing… 💌
        </button>
      </motion.div>
    )}
  </div>
);
}