import React from "react";

interface ArrowRightSvgProps {
  className?: string;
}

export default function ArrowRightSvg({ className }: ArrowRightSvgProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
}
