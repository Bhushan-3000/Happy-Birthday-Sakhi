import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.png";

export default function Memories() {
  const media = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "image", src: img6 },
    { type: "image", src: img7 },
    { type: "image", src: img8 },
    { type: "image", src: img9 },
    { type: "image", src: img10 },
    { type: "image", src: img11 },
    { type: "image", src: img12 },
    // { type: "image", src: "/src/assets/images/img3.png" },
    // { type: "image", src: "/src/assets/images/img4.png" },
    // { type: "video", src: "/src/assets/images/video1.mov" },
    // { type: "video", src: "/src/assets/images/video2.mov" },
    // { type: "image", src: "/src/assets/images/img5.png" },
    // { type: "image", src: "/src/assets/images/img6.png" },
    // { type: "image", src: "/src/assets/images/img7.png" },
    // { type: "image", src: "/src/assets/images/img8.png" },
    
  ];

  const breakpoints = {
    default: 3,
    1024: 2,
    640: 1,
  };

return (
  <div
    id="memories"
    className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 px-6 py-20"
  >
    {/* 🎀 Title */}
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl text-center text-pink-600 mb-2 font-[Pacifico] drop-shadow-sm"
    >
      Our Little Chaos 📸💃✨
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-center text-gray-700 mb-10"
    >
      Moments that made everything feel lighter 💖
    </motion.p>

    {/* ✨ Divider */}
    <div className="w-16 h-1 bg-pink-400 mx-auto mb-10 rounded-full"></div>

    {/* 📸 Masonry Grid */}
    <Masonry
      breakpointCols={breakpoints}
      className="flex gap-5"
      columnClassName="space-y-5"
    >
      {media.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          viewport={{ once: true }}
          className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-pink-300/50 transition duration-300"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt=""
              className="w-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-[9/16] object-cover transition duration-500 group-hover:scale-110"
            />
          )}

          {/* 💖 Overlay on hover */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <span className="text-white text-sm">💖</span>
          </div>
        </motion.div>
      ))}
    </Masonry>

    {/* 💌 Next Button */}
    <div className="flex justify-center mt-16">
      <button
        onClick={() =>
          document.getElementById("surprise").scrollIntoView({
            behavior: "smooth",
          })
        }
        className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition duration-300 active:scale-95"
      >
        Wait... there's more 👀
      </button>
    </div>
  </div>
);
}