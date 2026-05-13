/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  return (
    <div className="flex items-center gap-3">
      <div className={`relative ${sizes[size]}`}>
        {/* Outer Hexagon / Intelligence Frame */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full text-blue-600 dark:text-blue-500"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Inner Core / SQY Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${size === "sm" ? "text-[6px]" : "text-[10px]"} font-black tracking-tighter text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 px-1 rounded-sm shadow-sm z-10 uppercase transition-all whitespace-nowrap`}>
            SQY
          </span>
          {/* Central Pulse */}
          <motion.div
            className={`absolute ${size === "sm" ? "w-2 h-2" : "w-4 h-4"} bg-blue-500/20 rounded-full`}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
