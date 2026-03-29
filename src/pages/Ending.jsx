import { motion } from "framer-motion";

export default function Ending() {
  return (
    <div
      id="ending"
      className="min-h-screen flex items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-xl bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/40"
      >
        {/* 💖 Title */}
        <h2 className="text-4xl md:text-5xl font-[Pacifico] text-pink-600 mb-4">
          One Last Thing 💖
        </h2>

        {/* ✨ Divider */}
        <div className="w-16 h-1 bg-pink-400 mx-auto mb-6 rounded-full"></div>

        {/* 🎬 Credits Scroll */}
        <div className="overflow-hidden h-max relative">
          
            <p>
              I don’t say this often…  
              but I’m really glad you’re in my life.
            </p><br/>

            <p>
              You somehow make even the most random moments feel fun,  
              and honestly that’s rare, and something I really appreciate about you.
            </p><br/>

            <p>
              Being around you just feels easy…  
              no pressure, just good vibes.
            </p>

            <p>
              So yeah… never lose that chaotic, energetic side of yours 😭✨
            </p>
        <br/>
            <p>
              I hope this year brings you everything you deserve —  
              and a lot more reasons to smile. 
              And yeah… I’m always here for you. No matter what.
            </p>
        <br/>
            <p className="text-pink-600 font-semibold">
              Happiest Birthday Once Again 💖
            </p>

            {/* 🌸 Signature LAST */}
            <p className="mt-6 text-gray-500 italic">
              — From Sakhi... and everyone who’s lucky to have you 🌸
            </p>
          
        </div>
      </motion.div>
    </div>
  );
}