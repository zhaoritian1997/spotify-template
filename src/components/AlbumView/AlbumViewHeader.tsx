import React from "react";
import Image from "next/image";
import { usePlayingProvider } from "@/hooks/usePlayProvider";

export default function AlbumViewHeader() {
  const { playingAlbumInfo } = usePlayingProvider();
  return (<div className="h-[186px] mx-[-16px] px-[16px] pb-[16px] flex items-end gap-[16px]"
    style={{ background: "linear-gradient(to bottom, #353535, #121212)" }}>
    <div className="w-[130px] h-[130px] rounded-[8px] overflow-hidden">
      <Image src={playingAlbumInfo?.image} alt={playingAlbumInfo?.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-[4px]">
      <span className="text-[14px] text-white/60 select-none">{playingAlbumInfo?.type}</span>
      <p className="text-[24px] text-white font-bold select-none">{playingAlbumInfo?.name}</p>
      <div className="flex items-center gap-[4px] text-white/60">
        <Image src={playingAlbumInfo?.image} alt={playingAlbumInfo?.name} className="w-[16px] h-[16px] rounded-full" />
        <span className="text-[14px] text-white font-bold select-none">{playingAlbumInfo?.artist}</span>•
        <span className="text-[14px] text-white/60 select-none">{playingAlbumInfo?.year}</span>•
        <span className="text-[14px] text-white/60 select-none">{playingAlbumInfo?.songs?.length} songs</span>,<span className="text-[14px] text-white/60 select-none">{playingAlbumInfo?.time}</span>
      </div>
    </div>
  </div>)
}


