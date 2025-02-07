import React from "react";

interface EmbedArtistSvgProps {
  className?: string;
}

export default function EmbedArtistSvg({ className }: EmbedArtistSvgProps) {
  return <svg className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.75A.75.75 0 0 1 .75 1h14.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75V1.75zm1.5.75v12h13v-12h-13z"></path><path d="M6.962 5.47a.75.75 0 0 1 0 1.06L4.992 8.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L2.87 8.5 5.9 5.47a.75.75 0 0 1 1.061 0zm2.076 0a.75.75 0 0 0 0 1.06l1.97 1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L13.13 8.5 10.1 5.47a.75.75 0 0 0-1.061 0z"></path></svg>;
}
