import React from "react";

interface CheckMarkSvgProps {
  className?: string;
}

export default function CheckMarkSvg({ className }: CheckMarkSvgProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
}
