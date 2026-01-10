import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroText() {
  const texts = [
    "Kręcimy kilometry",
    "Prowadzimy stream",
    "Zbieramy fundusze",
    "Promujemy aktywność",
    "Działamy razem",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-28 md:h-22">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 text-5xl md:text-6xl font-bold text-gray-100 text-shadow-md"
        >
          {texts[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}
