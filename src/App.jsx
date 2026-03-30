import { useEffect, useState } from "react";

import Landing from "./pages/Landing";
import Message from "./pages/Message";
import Memories from "./pages/Memories";
import Surprise from "./pages/Surprise";
import Ending from "./pages/Ending";
import HeartBurst from "./components/HeartBurst";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

// Loader effect
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

// Sound effect
useEffect(() => {
  const playPop = (e) => {
    if (e.target.closest("button, a")) {
      // 🔊 Sound
      const sound = new Audio("/Happy-Birthday-Sakhi/pop.mp3");
      sound.volume = 0.3;
      sound.play();

      // 📳 Vibration (only if supported)
      if (navigator.vibrate) {
        navigator.vibrate(30); // 30ms soft vibration
      }
    }
  };

  document.addEventListener("click", playPop);

  return () => {
    document.removeEventListener("click", playPop);
  };
}, []);
  

  // ⏳ Show Loader First
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    
      {/* ✨ Cursor Glow Layer */}
      <CursorGlow />
      {/* <HeartBurst /> */}

      {/* 🌸 Main App */}
      <div className="bg-pink-50 text-gray-800 scroll-smooth">

        {/* 🌸 Landing */}
        <section id="home">
          <Landing />
        </section>

        {/* 💌 Message */}
        <section id="message">
          <Message />
        </section>

        {/* 📸 Memories */}
        <section id="memories">
          <Memories />
        </section>

        {/* 🎉 Surprise */}
        <section id="surprise">
          <Surprise />
        </section>

        {/* 💖 Ending */}
        <section id="ending">
          <Ending />
        </section>


      </div>
    </>
  );
}

export default App;
