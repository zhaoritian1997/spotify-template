import React, { useContext } from "react";
import { AlbumInfo } from "@/types";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { PinSvg, PlaySvg, PauseSvg } from "@/components/svgComponents";
import { SidebarContext } from "./index";
import Image from "next/image";
import clsx from "clsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
interface AlbumCompactProps {
  list: AlbumInfo[]
}
const minSoleImgWidth = 140
export default function AlbumCompact({ list }: AlbumCompactProps) {
  const { isPlaying, setIsPlaying, setSongList, playingSongInfo, playingAlbumInfo, setPlayingAlbumInfo, setPlayingSongInfo } = usePlayingProvider();
  const { filterType, minColumnWidth } = useContext(SidebarContext);
  const filteredList = filterType === 'all' ? list : list.filter((item) => item.type === filterType);
  const isSoleImg = minColumnWidth <= minSoleImgWidth
  const matchAlbum = (data: AlbumInfo, albumId: number) => {
    return data.id === albumId
  }
  const subTile = (item: AlbumInfo) => {
    if (item.type === 'Album') {
      return item.artist
    } else {
      return `${item.songs.length} songs`
    }
  }
  const playAlbum = (item: AlbumInfo) => {
    if (isPlaying && matchAlbum(item, playingSongInfo?.albumId)) {
      setIsPlaying(false)
      return
    }
    setPlayingSongInfo(item.songs[0])
    setSongList(item.songs)
    setPlayingAlbumInfo(item)
    setIsPlaying(true)
  }
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
  return <div className={clsx("grid auto-rows-[1fr] w-full h-0 rounded-[8px]", isSoleImg ? 'px-0' : 'px-[8px]')} style={{ gridTemplateColumns: `repeat(auto-fill,minmax(${minColumnWidth}px,1fr))` }}>
    {filteredList.map((item) => (
      <div key={item.id} className={clsx(
        "grid gap-[8px]  w-full contain hover:bg-[#282828]  rounded-[4px] cursor-pointer group/gridRow",
        isSoleImg ? 'p-[4px]' : "grid-rows-[auto_44px] p-[12px]",
        matchAlbum(playingAlbumInfo, item.id) && "bg-[#282828]"
      )} onClick={() => setPlayingAlbumInfo(item)}>
        {isSoleImg ?
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='rounded-[4px] overflow-hidden relative cursor-pointer'>
                <Image src={item.image} alt={item.name} className="object-cover w-full h-full" />
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
          : <div className='rounded-[4px] overflow-hidden relative cursor-pointer'>
            <div className={clsx("absolute  right-[10px] w-[48px] h-[48px] rounded-full bg-[#1ed760] text-black flex items-center justify-center transition-all duration-300", isPlaying && matchAlbum(item, playingSongInfo?.albumId) ? "bottom-[10px]" : "bottom-0 opacity-0 group-hover/gridRow:bottom-[10px] group-hover/gridRow:opacity-100")} onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              playAlbum(item)
            }}>
              {isPlaying && matchAlbum(item, playingSongInfo?.albumId) ? <PauseSvg className="w-[20px] h-[20px]" /> : <PlaySvg className="w-[20px] h-[20px]" />}
            </div>
            <Image src={item.image} alt={item.name} className="object-cover w-full h-full" />
          </div>}
        {!isSoleImg ? <div className='flex flex-col gap-[2px]'>
          <div className={clsx("text-[16px]", matchAlbum(item, playingSongInfo?.albumId) ? "text-[#1ed760]" : "text-[#fff]")}>{item.name}</div>
          <div className="flex items-center justify-between gap-[4px]" >
            <div className="flex items-center gap-[4px]">
              {item.isPinned &&
                <div className="text-[#1ed760]">
                  <PinSvg className="w-[12px] h-[12px]" />
                </div>}
              <p className="text-[14px] text-[#b3b3b3]">{item.type}</p>
              {item.type !== 'Artist' && <>
                <p className="text-[14px] text-[#b3b3b3]">•</p>
                <p className="text-[14px] text-[#b3b3b3] font-normal">{subTile(item)}</p>
              </>
              }
            </div>
          </div>
        </div> : null}
      </div>
    ))}
  </div>;
}

