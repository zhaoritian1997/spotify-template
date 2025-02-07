import React from "react";

interface CopySongLinkSvgProps {
  className?: string;
}

export default function CopySongLinkSvg({ className }: CopySongLinkSvgProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 8a1 1 0 0 1 1-1h3.5v2H5v11h14V9h-2.5V7H20a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z"></path>
      <path d="M12 12.326a1 1 0 0 0 1-1V3.841l1.793 1.793a1 1 0 1 0 1.414-1.414L12 .012 7.793 4.22a1 1 0 1 0 1.414 1.414L11 3.84v7.485a1 1 0 0 0 1 1z"></path>
    </svg>
  );
}
