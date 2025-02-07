import React from "react";

interface CollapseSvgProps {
  className?: string;
}

export default function CollapseSvg({ className }: CollapseSvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M.47 11.03a.75.75 0 0 0 1.06 0L8 4.56l6.47 6.47a.75.75 0 1 0 1.06-1.06L8 2.44.47 9.97a.75.75 0 0 0 0 1.06z"></path></svg>;
}
