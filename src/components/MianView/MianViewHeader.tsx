"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
export default function MianViewHeader() {
  const [active, setActive] = useState<string>("All");
  const filterList = ["All", "Music", "Podcast", "Artist", "Album", "Playlist", "Song"];
  return <div className="relative w-full h-[64px] flex items-center gap-[8px] z-20">
    {filterList.map((item) => (
      <Button key={item} className={clsx("h-[32px] px-[12px] rounded-full ", active === item ? "bg-white text-black hover:bg-white/90" : "bg-white/10 text-white hover:bg-white/20")} onClick={() => setActive(item)} >{item}</Button>
    ))}
  </div>;
}
