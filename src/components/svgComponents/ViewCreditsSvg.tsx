import React from "react";

interface ViewCreditsSvgProps {
  className?: string;
}

export default function ViewCreditsSvg({ className }: ViewCreditsSvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.328V1h-1.5v4.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zm-4.5 3V4H7.5v3.828h-1a2.5 2.5 0 1 0 2.5 2.5zm-2.5-1h1v1a1 1 0 1 1-1-1zM0 14.5h16V16H0v-1.5zM2 10H0v1.5h2V10zM0 5.5h4V7H0V5.5zM12 1H0v1.5h12V1z"></path></svg>;
}
