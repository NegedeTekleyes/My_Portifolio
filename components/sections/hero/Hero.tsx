"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Typewriter from "./Typewriter";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <p className="text-gray-300 text-2xl mb-2">Welcome</p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          I'm a <Typewriter />
        </h1>

        <p className="text-gray-300 mb-8">
          based in Addis Abeba, Ethiopia
        </p>

        <Button>Hire Me</Button>
      </div>
    </section>
  );
}
