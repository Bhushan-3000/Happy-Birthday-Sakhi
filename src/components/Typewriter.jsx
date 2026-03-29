import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 300 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, Math.random() * speed + 30);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <p className="whitespace-pre-line text-lg font-[Poppins] text-gray-800 leading-relaxed mb-4">
      {displayedText}
      <span className="animate-pulse">|</span>
      
<br></br>
    </p>
  );
}