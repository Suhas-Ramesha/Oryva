"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 120, y: 90 }, { x: 320, y: 60 }, { x: 540, y: 110 }, { x: 700, y: 70 },
  { x: 80, y: 240 }, { x: 260, y: 200 }, { x: 460, y: 230 }, { x: 660, y: 210 },
  { x: 160, y: 380 }, { x: 380, y: 350 }, { x: 580, y: 390 }, { x: 740, y: 350 },
  { x: 100, y: 500 }, { x: 320, y: 480 }, { x: 520, y: 510 }, { x: 700, y: 470 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [0, 5], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6],
  [6, 7], [4, 8], [5, 9], [6, 10], [7, 11], [8, 9], [9, 10], [10, 11],
  [8, 12], [9, 13], [10, 14], [11, 15], [12, 13], [13, 14], [14, 15],
];

export function NetworkNodes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={`${a}-${b}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="var(--accent)"
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.03, ease: "easeOut" }}
        />
      ))}
      {NODES.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={3}
          fill="var(--accent-bright)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1], scale: 1 }}
          transition={{
            opacity: { duration: 3, delay: i * 0.15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            scale: { duration: 0.5, delay: i * 0.05 },
          }}
        />
      ))}
    </svg>
  );
}
