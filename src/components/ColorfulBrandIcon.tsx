/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface ColorfulBrandIconProps {
  id: string;
  className?: string;
  size?: number;
}

export const ColorfulBrandIcon: React.FC<ColorfulBrandIconProps> = ({ id, className = "", size = 24 }) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
  };

  switch (id) {
    case "gemini":
      return (
        <svg {...commonProps}>
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4182f4" />
              <stop offset="100%" stopColor="#9b72f3" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#gemini-grad)"
            d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 7.92c.13.393.13.786 0 1.179a7.5 7.5 0 0 0-7.92 7.92c-.393.13-.786.13-1.179 0a7.5 7.5 0 0 0-7.92-7.92c-.13-.393-.13-.786 0-1.179a7.5 7.5 0 0 0 7.92-7.92c.13-.13.261-.13.393-.13Z" 
          />
        </svg>
      );
    case "chatgpt":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="12" fill="#74aa9c" />
          <path 
            fill="white"
            d="M17.65 10.63a3.52 3.52 0 0 0-1.42-2.45 3.55 3.55 0 0 0-3.66-.46 3.52 3.52 0 0 0-4.63-.58 3.55 3.55 0 0 0-2.31 3.29 3.52 3.52 0 0 0-1.28 4.66 3.55 3.55 0 0 0 3.32 2.27 3.52 3.52 0 0 0 1.42 2.45 3.55 3.55 0 0 0 3.66.46 3.52 3.52 0 0 0 4.63.58 3.55 3.55 0 0 0 2.31-3.29 3.52 3.52 0 0 0 1.28-4.66 3.55 3.55 0 0 0-3.32-2.27ZM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" 
          />
        </svg>
      );
    case "claude":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="6" fill="#D97757" />
          <path 
            fill="white"
            d="M12 5.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" 
          />
        </svg>
      );
    case "deepseek":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="deepseek-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D66F6" />
              <stop offset="100%" stopColor="#1245B1" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#deepseek-grad)" />
          <path 
            fill="white"
            d="M12 6a6 6 0 0 0-6 6c0 3.31 2.69 6 6 6s6-2.69 6-6a6 6 0 0 0-6-6Zm0 9.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" 
          />
        </svg>
      );
    case "grok":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" fill="#000" />
          <path stroke="white" strokeWidth="2" d="M8 8l8 8M16 8l-8 8" />
        </svg>
      );
    case "doubao":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" fill="#5E5CE6" />
          <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M9 10c0 1.5 1 2.5 3 2.5s3-1 3-2.5" />
          <circle cx="9" cy="10" r="1.5" fill="white" />
          <circle cx="15" cy="10" r="1.5" fill="white" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" fill="#71717a" />
          <path stroke="white" strokeWidth="2" d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};
