import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";

export default function Message() {
  const message = `From random strangers…

to MERI PYAARI SAKHI 💖✨

Honestly… it still amazes me 😮
how someone who started as a stranger
now feels like home.

Like…
the moment something beautiful happens —
you’re the first person my heart wants to share it with.

You went from
“just another face”
to “oye, play that Bhojpuri track again!” in seconds 😤💃

You’re that kind of energetic —
the kind that turns a dull room into a dance floor,
a simple text into a full-blown comedy show.

And the craziest part?
We don’t even need to speak —
one look, one smirk, and we’re both losing it.
Same wavelength, same soul, same madness. ✨ 

And those random, endless chats?
Half the time we’re just being ridiculous 😂
but I wouldn’t trade them for anything in the world.

You went from
“just a name on my phone”
to “why haven’t they texted back?” in no time 😩

And no, I’d never say this to your face (don’t get emotional 😌),
but… you’ve become one of my favorite people.

Seriously...

You make everything softer, brighter, easier —
without even realizing it.

So on your birthday…

I’m just so incredibly glad it’s you. 🥰✨ 

Happiest Birthday, Sakhi 🎂💖✨

P.S. — Don’t change — the world needs your chaos and your calm, exactly as they are. 🌪️✨`;

return (
  <div
    id="message"
    className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300"
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/80 backdrop-blur-lg max-w-2xl w-full px-10 py-8 rounded-3xl shadow-xl hover:shadow-pink-300/40 transition duration-300 border border-white/40"
    >
      {/* 💌 Heading */}
      <h2 className="text-3xl md:text-4xl font-[Pacifico] text-pink-600 mb-6 text-center drop-shadow-sm">
        A little something for you 💌
      </h2>

      {/* ✨ Divider (small but premium touch) */}
      <div className="w-16 h-1 bg-pink-400 mx-auto mb-6 rounded-full"></div>

      {/* 📝 Message */}
      <div className="text-gray-800 text-lg leading-relaxed text-center">
        <Typewriter text={message} speed={65} />
      </div>

      {/* 💖 Button */}
      <button
        onClick={() =>
          document.getElementById("memories").scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mx-auto mt-8 block px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition duration-300 active:scale-95"
      >
        Go to Memories 📸
      </button>
    </motion.div>
  </div>
);
}