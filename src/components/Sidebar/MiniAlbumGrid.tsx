import React, { useContext } from "react";
import { AlbumInfo } from "@/types";
import Image from "next/image";
import { PinSvg } from "@/components/svgComponents";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { SidebarContext } from ".";
import clsx from "clsx";

interface MiniAlbumGridProps {
  list: AlbumInfo[]
}

export default function MiniAlbumGrid({ list }: MiniAlbumGridProps) {
  const { setPlayingAlbumInfo,playingSongInfo } = usePlayingProvider()
  const { filterType } = useContext(SidebarContext)
  const filteredList = filterType === 'all' ? list : list.filter((item) => item.type === filterType)
  const AlbumType = (val: AlbumInfo) => {
    if (val.type === "Album") {
      return val.artist
    }
    if (val.type === "Playlist") {
      return `${val.songs.length} songs`
    }
    if (val.type === "Artist") {
      return val.artist
    }
    return ''
  }
  const handleClick = (item: AlbumInfo) => {
    setPlayingAlbumInfo(item)
  }
  return <div className="flex flex-1 flex-col w-full px-[4px] rounded-[8px] flex-shrink-0 h-0">
    {filteredList.map((item) => (
      <div key={item.id} className="w-[64px] h-[64px] flex items-center justify-center flex-shrink-0 hover:bg-[#282828] hover:bg-opacity-50 rounded-[4px] cursor-pointer">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center justify-start gap-[8px] hover:bg-[#282828] rounded-[4px] cursor-pointer" onClick={() => handleClick(item)}>
              <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-[4px]" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={18} className="bg-[#282828] shadow-[0_0_10px_0_rgba(0,0,0,0.5)] h-[50px] p-[8px] rounded-[4px] flex flex-col gap-[4px]">
            <p className={clsx("text-[16px] font-bold", playingSongInfo?.albumId === item.id ? "text-[#1ed760]" : "text-[#fff]")}>
              {item.name}</p>
            <div className="flex items-center gap-[6px]">
              {item.isPinned &&
                <span className="text-[#1ed760]">
                  <PinSvg className="w-[12px] h-[12px]" />
                </span>
              }
              <p className="text-[12px] text-[#b3b3b3] flex items-center gap-[4px]">
                <span>{item.type}</span>
                {item.type &&
                  <>
                    <span>•</span>
                    <span>{AlbumType(item)}</span>
                  </>
                }
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    ))}
  </div>;
}


