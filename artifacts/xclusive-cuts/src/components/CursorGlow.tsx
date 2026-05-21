import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </motion.div>
  );
}
