import React from "react";
import { PlayingSongInfo, AlbumInfo } from "@/types";
import { Button } from "@/components/ui/button";
import { usePlayingProvider } from "@/hooks/usePlayProvider";

interface OnTourProps {
  playingSongInfo: PlayingSongInfo;
}

export default function OnTourCard({ playingSongInfo }: OnTourProps) {
  const { albumList } = usePlayingProvider();
  const album = albumList.find((item) => item.id === playingSongInfo.albumId) || { name: "Unknown Album" } as AlbumInfo;
  return <div className="flex-shrink-0 p-[16px_8px] flex flex-col gap-[12px] flex flex-col bg-[#1f1f1f] rounded-[8px]">
    <div className="flex px-[8px] items-center justify-between">
      <span className="text-[16px] text-white font-bold">On tour</span>
      <Button variant="ghost" className="text-[14px] text-[#b3b3b3] p-0 hover:underline hover:scale-105 transition-all duration-300">
        Show all
      </Button>
    </div>
    <div className="flex gap-[16px] w-full overflow-hidden p-[8px] hover:bg-white/10 rounded-[4px] cursor-pointer group/on-tour-1">
      <time className="flex flex-col flex-shrink-0 bg-[#121212] rounded-[4px] w-[56px] h-[56px] p-[8px] items-center justify-center">
        <h5 className="text-[11px] text-white font-bold group-hover/on-tour-1:underline transition-all duration-300">May</h5>
        <h1 className="text-[24px] leading-[24px] 
        letter-spacing-[-1px] text-white font-bold group-hover/on-tour-1:underline transition-all duration-300">9</h1>
      </time>
      <div className="flex flex-col flex-1 flex-shrink-0">
        <h3 className="mb-[4px] w-full text-white overflow-hidden ellipsis text-[16px] font-bold group-hover/on-tour-1:underline transition-all duration-300">Braunschweig</h3>
        <span className="text-[14px] overflow-hidden ellipsis text-[#b3b3b3] group-hover/on-tour-1:underline transition-all duration-300">{album.type === 'Album' && album.name}</span>
        <p className="text-[14px] w-[270px] text-ellipsis overflow-hidden whitespace-nowrap text-[#b3b3b3] group-hover/on-tour-1:underline transition-all duration-300"><time>Fri 5:00 PM</time> • Werkstatt Heinz-Scheer-Straße der Lebenshilfe Braunschweig</p>
      </div>
    </div>
    <div className="flex gap-[16px] w-full overflow-hidden p-[8px] hover:bg-white/10 rounded-[4px] cursor-pointer group/on-tour-2">
      <time className="flex flex-col flex-shrink-0 bg-[#121212] rounded-[4px] w-[56px] h-[56px] p-[8px] items-center justify-center">
        <h5 className="text-[11px] text-white font-bold group-hover/on-tour-2:underline transition-all duration-300">Jun</h5>
        <h1 className="text-[24px] leading-[24px] 
        letter-spacing-[-1px] text-white font-bold group-hover/on-tour-2:underline transition-all duration-300">19</h1>
      </time>
      <div className="flex flex-col flex-1 flex-shrink-0">
        <h3 className="mb-[4px] w-full text-white overflow-hidden ellipsis text-[16px] font-bold group-hover/on-tour-2:underline transition-all duration-300">Dessel</h3>
        <span className="text-[14px] overflow-hidden ellipsis text-[#b3b3b3] group-hover/on-tour-2:underline transition-all duration-300">{album.type === 'Album' && album.name}</span>
        <p className="text-[14px] w-[270px] text-ellipsis overflow-hidden whitespace-nowrap text-[#b3b3b3] group-hover/on-tour-2:underline transition-all duration-300"><time>Thu 5:00 PM</time> • Graspop Metal Meeting</p>
      </div>
    </div>
  </div>;
}




