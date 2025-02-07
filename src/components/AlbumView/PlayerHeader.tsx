import React from "react";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { PlaySvg, PauseSvg } from "@/components/svgComponents";
export default function PlayerHeader() {
  const { isPlaying, setIsPlaying, playingAlbumInfo } = usePlayingProvider();
  return (<div className="flex items-center h-[64px] gap-[8px] px-[16px]" >
    <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1ed760] text-black cursor-pointer hover:bg-[#1ed760]/90 hover:scale-105 transition-all duration-300" onClick={() => setIsPlaying(!isPlaying)}>
      <span>
        {isPlaying ? <PauseSvg className="w-[20px] h-[20px]" /> : <PlaySvg className="w-[20px] h-[20px]" />}
      </span>
    </div>
    <p className="text-[24px] text-white font-bold select-none">{playingAlbumInfo?.name}</p>
  </div>)
}