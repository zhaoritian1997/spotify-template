import React from "react";

interface GridSvgProps {
  className?: string;
}

export default function GridSvg({ className }: GridSvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M1 1h6v6H1V1zm1.5 1.5v3h3v-3h-3zM1 9h6v6H1V9zm1.5 1.5v3h3v-3h-3zM9 1h6v6H9V1zm1.5 1.5v3h3v-3h-3zM9 9h6v6H9V9zm1.5 1.5v3h3v-3h-3z"></path></svg>
}
