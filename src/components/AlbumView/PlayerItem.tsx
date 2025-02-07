import React from "react";
import { PlayingSongInfo } from "@/types";
import Image from "next/image";
import PlayGif from "@/assets/images/equaliser-animated-green.gif";
import { PlaySvg, PauseSvg, AddSvg, CheckMarkSvg, MenuSvg } from "@/components/svgComponents";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import clsx from "clsx";
export default function PlayerItem({ song, index, viewType }: { song: PlayingSongInfo, index: number, viewType: "list" | "compact" }) {
  const { isPlaying, setIsPlaying, playingSongInfo, setPlayingSongInfo } = usePlayingProvider();
  const isCurrentSong = playingSongInfo?.id === song.id;
  const handlePlay = () => {
    if (isCurrentSong) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingSongInfo(song);
      setIsPlaying(true);
    }
  }
  const isCompact = viewType === "compact";
  return <div className="flex items-center justify-between py-[8px] rounded-[8px] px-[16px] mx-[16px] cursor-pointer hover:bg-[#282828] transition-all duration-300 group/playerItem">
    <div className="flex items-center gap-[16px]">
      <div className="relative w-[16px] h-[16px] flex items-center justify-center">
        <span className="absolute top-0 left-0 w-[16px] h-[16px] flex items-center justify-center opacity-0 group-hover/playerItem:opacity-100 transition-all duration-300 bg-[#282828]" onClick={handlePlay}>
          {isCurrentSong && isPlaying ? <PauseSvg className="w-[16px] h-[16px]" /> : <PlaySvg className="w-[16px] h-[16px]" />}
        </span>
        <span className={clsx("text-[14px] select-none cursor-pointer transition-all duration-300", isCurrentSong ? "text-[#1ed760]" : "text-white/60")}>{
          isCurrentSong && isPlaying ?
            <Image src={PlayGif} alt="play" className="w-[16px] h-[16px]" /> :
            index + 1
        }</span>
      </div>
      <div className={clsx("flex flex-col", isCompact && "w-[158px] truncate")}>
        <span className={clsx("text-[14px] select-none cursor-pointer transition-all duration-300 hover:underline", isCurrentSong ? "text-[#1ed760]" : "text-white")}>{song.title}</span>
        {!isCompact && <span className="text-[14px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300 hover:underline ">{song.artist}</span>}
      </div>
      {isCompact && <div className="flex-1 text-[14px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300 hover:underline">{song.artist}</div>}
    </div>
    <div className="flex items-center justify-between gap-[16px] w-[90px]">
      <div className="opacity-0 group-hover/playerItem:opacity-100 transition-all duration-300">
        {song.isAdd ?
          <span className="flex items-center justify-center text-black bg-[#1ed760] rounded-full p-[4px]">
            <CheckMarkSvg className="w-[12px] h-[12px]" />
          </span> :
          <span className="flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
            <AddSvg className="w-[20px] h-[20px]" />
          </span>
        }
      </div>
      <span className="text-[14px] text-white/60 select-none">{song.duration}</span>
      <span className="flex items-center justify-center opacity-0 group-hover/playerItem:opacity-100 transition-all duration-300">
        <MenuSvg className="w-[16px] h-[16px]" />
      </span>
    </div>
  </div>;
}


