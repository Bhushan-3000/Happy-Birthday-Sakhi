import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", moveMouse);

    const animate = () => {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;

      if (glow) {
        glow.style.transform = `translate(${posX}px, ${posY}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      ref={glowRef}
className="fixed top-0 left-0 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl opacity-40 pointer-events-none z-50"    />
  );
}