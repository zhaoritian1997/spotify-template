import React from "react";

interface MenuSvgProps {
  className?: string;
}

export default function MenuSvg({ className }: MenuSvgProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
    </svg>
  );
}

