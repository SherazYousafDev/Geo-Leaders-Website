// src/Components/ScrollAnimation.jsx
import { motion } from "framer-motion";

export default function ScrollAnimation({ 
  children, 
  direction = "up", 
  delay = 0 
}) {

  // Disable scroll-based animation on mobile because it hides elements
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={isMobile ? false : { amount: 0.25, once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}
