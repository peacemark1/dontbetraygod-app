"use client";

import { useEffect, useState } from "react";

export default function UXEnhancements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 🎞️ Film Grain Overlay */}
      <div className="film-grain" />

      {/* 🖱️ Custom Cursor */}
      <div 
        className="custom-cursor hidden md:block"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
          opacity: isHovering ? 0.5 : 1
        }} 
      />
      <div 
        className="cursor-glow hidden md:block"
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }} 
      />
    </>
  );
}
