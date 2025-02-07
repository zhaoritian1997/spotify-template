import React from "react";

interface CompactSvgProps {
  className?: string;
}

export default function CompactSvg({ className }: CompactSvgProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path></svg>
  );
}
