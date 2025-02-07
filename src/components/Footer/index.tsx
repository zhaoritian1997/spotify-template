import React from "react";
import Player from "@/components/Footer/Player";
import Contentinfo from "@/components/Footer/Contentinfo";
import ButtonTertiary from "@/components/Footer/ButtonTertiary";
export default function Footer() {
  return (
    <footer className="h-[72px] z-10 flex items-center justify-between relative" style={{gridArea:"now-playing-bar"}}>
      <Contentinfo/>
      <Player/>
      <ButtonTertiary/>
    </footer>
  )
}