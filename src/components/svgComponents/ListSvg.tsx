import React from "react";

interface ListSvgProps {
  className?: string;
}
export default function ListSvg({ className }: ListSvgProps) {
  return (
    <svg
      className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
    </svg>
  );
}

