"use client";
import { useEffect, useState } from "react";

const words = ["Designer", "Developer", "Freelancer"];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let speed = deleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <span className="text-green-400 border-r-2 border-green-400 pr-1 animate-pulse">
      {text}
    </span>
  );
}
