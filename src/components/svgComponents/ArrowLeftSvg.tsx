import React from "react";

interface ArrowLeftSvgProps {
  className?: string;
}

export default function ArrowLeftSvg({ className }: ArrowLeftSvgProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
}
