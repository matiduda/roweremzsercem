import { motion, AnimatePresence, useInView, startOptimizedAppearAnimation, useAnimate, type Variants, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  duration?: number;
  value?: number;
  addPlusSign?: boolean;
}

export default function TweenedNumber({ duration = 5, value = 123, addPlusSign = false }: ScrollRevealProps) {
  const elementRef = useRef(null)

  const isInView = useInView(elementRef, {
    once: true,
    amount: 0.25
  })

  useEffect(() => {
    if (isInView) {
      animateMap();
    }
  }, [isInView])

  // Number animation

  const [scope, animate] = useAnimate()

  const animateMap = () => {
    animate(count, value, {
      duration: duration,
      ease: "easeOut"
    });
  }

  // Number animation

  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  return (
    <span>
      <motion.span ref={elementRef}>{rounded}</motion.span>
      {addPlusSign ? '+' : ''}
    </span>
  );
}
