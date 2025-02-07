import React from "react";

interface StopSvgProps {
  className?: string;
}

export default function StopSvg({ className }: StopSvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM3.965 2.904a6.5 6.5 0 0 1 9.131 9.131L3.965 2.904zm-1.061 1.06 9.131 9.132a6.5 6.5 0 0 1-9.131-9.131z"></path></svg>;
}
