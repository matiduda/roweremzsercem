import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroText() {
  const texts = [
    "Kręcimy kilometry",
    "Prowadzimy stream",
    "Zbieramy fundusze",
    "Promujemy sport",
    "Zbieramy fundusze",
    "Zwiedzamy Polskę",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="inset-0 text-5xl md:text-6xl font-bold text-gray-100 text-shadow-sm text-left"
        >
          {texts[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
