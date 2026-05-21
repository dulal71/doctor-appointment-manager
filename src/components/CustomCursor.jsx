"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 500,
    mass: 0.3,
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // ✅ SSR safe mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Cursor logic
  useEffect(() => {
    if (!mounted) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleHover = (e) => {
      const el = e.target;
      const isInteractive = el.closest("a, button, .clickable");
      setIsHovering(!!isInteractive);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("mousemove", handleHover);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mousemove", handleHover);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [mounted, cursorX, cursorY]);

  // ❌ disable on mobile
  if (!mounted || isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-red-500 pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering
          ? "rgba(239, 68, 68, 0.2)"
          : "rgba(0,0,0,0)",
        borderColor: isHovering
          ? "rgba(239, 68, 68, 0.8)"
          : "rgba(239, 68, 68, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* inner dot */}
      <motion.div
        className="w-1.5 h-1.5 bg-white rounded-full"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </motion.div>
  );
}