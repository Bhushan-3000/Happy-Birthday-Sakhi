import { useEffect } from "react";

export default function HeartBurst() {
  useEffect(() => {
    const createHeart = (x, y) => {
      const heart = document.createElement("div");

const hearts = ["💖", "💗", "💘", "💝"];
heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];      heart.style.position = "fixed";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = "20px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = 9999;
      heart.style.transition = "all 1s ease-out";

      document.body.appendChild(heart);

      // Animate
      setTimeout(() => {
heart.style.transform = `
  translate(${(Math.random() - 0.5) * 150}px, ${-80 - Math.random() * 50}px)
  scale(${1 + Math.random()})
`;        heart.style.opacity = "0";
      }, 10);

      // Remove after animation
      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    const handleClick = (e) => {
      // Create multiple hearts
      for (let i = 0; i < 6; i++) {
        createHeart(e.clientX, e.clientY);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}