// AnimatedMenuIcon.jsx
import React from "react";
import { motion } from "framer-motion";

const OPEN_POINTS = [
  { x: 2, y: 6 },
  { x: 5, y: 6 },
  { x: 8, y: 6 },
  { x: 11, y: 6 },
  { x: 14, y: 6 },
  { x: 2, y: 10 },
  { x: 5, y: 10 },
  { x: 8, y: 10 },
  { x: 11, y: 10 },
  { x: 14, y: 10 },
];

const CLOSE_POINTS = [
  { x: 4, y: 3 },
  { x: 6, y: 5 },
  { x: 8, y: 7 },
  { x: 10, y: 9 },
  { x: 12, y: 11 },
  { x: 12, y: 3 },
  { x: 10, y: 5 },
  { x: 8, y: 7 },
  { x: 6, y: 9 },
  { x: 4, y: 11 },
];

export default function AnimatedMenuIcon({
  open = false,
  size = 48,
  color = "#0C0C0B",
  r = 0.9,
  className = "",
}) {
  const target = open ? CLOSE_POINTS : OPEN_POINTS;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={open ? "Close menu" : "Open menu"}
      shapeRendering="geometricPrecision"
    >
      {target.map((p, i) => (
        <motion.circle
          key={i}
          r={r}
          fill={color}
          initial={false}
          animate={{ cx: p.x, cy: p.y }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
