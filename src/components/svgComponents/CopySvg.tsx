import React from "react";

interface CopySvgProps {
  className?: string;
}

export default function CopySvg({ className }: CopySvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M5 .75A.75.75 0 0 1 5.75 0h9.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H12v-1.5h2.5v-9h-8V3H5V.75z"></path><path d="M.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75H.75zm.75 10.5v-9h8v9h-8z"></path></svg>;
}
