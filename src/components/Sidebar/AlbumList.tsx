import React, { useContext } from "react";
import { AlbumInfo } from "@/types";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { PinSvg, VolumeFillSvg, PlaySvg, PauseSvg } from "@/components/svgComponents";
import { SidebarContext } from "./index";
import Image from "next/image";
import clsx from "clsx";
interface AlbumCompactProps {
  list: AlbumInfo[]
}

export default function AlbumCompact({ list }: AlbumCompactProps) {
  const { isPlaying, setIsPlaying, setSongList, playingSongInfo, playingAlbumInfo, setPlayingAlbumInfo, setPlayingSongInfo } = usePlayingProvider();
  const { isExpanded, filterType } = useContext(SidebarContext);

  const filteredList = filterType === 'all' ? list : list.filter((item) => item.type === filterType);
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
  return <div className="flex flex-col w-full h-0 px-[8px] rounded-[8px]">
    {filteredList.map((item) => (
      <div key={item.id} className={clsx(
        "flex-shrink-0 w-full h-[64px] p-[8px] hover:bg-[#282828] rounded-[4px] cursor-pointer group/listRow",
        isExpanded && "grid grid-cols-[1fr_20%_20%] gap-[24px] items-center",
        matchAlbum(playingAlbumInfo, item.id) && "bg-[#282828]"
      )}
        style={{ gridTemplateAreas: isExpanded ? `"listRow addedAt lastPlayedAt"` : `unset` }}
        onClick={() => setPlayingAlbumInfo(item)}>
        <div className="flex items-center gap-[8px] w-full" style={{ gridArea: `"1 / listRow / 1 / lastPlayedAt;"` }}>
          <div className='w-[48px] h-[48px] rounded-[4px] overflow-hidden relative cursor-pointer' onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            playAlbum(item)
          }}>
            <div className="absolute top-0 left-0 w-[48px] h-[48px] bg-[#000] bg-opacity-50 text-[#fff] flex items-center justify-center rounded-[4px] opacity-0 group-hover/listRow:opacity-100 transition-opacity duration-300">
              {isPlaying && matchAlbum(item, playingSongInfo?.albumId) ? <PauseSvg className="w-[20px] h-[20px]" /> : <PlaySvg className="w-[20px] h-[20px]" />}
            </div>
            <Image src={item.image} alt={item.name} width={48} height={48} className="object-cover" />
          </div>
          <div className='flex flex-col gap-[2px]'>
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
          </div>
          {isPlaying && matchAlbum(item, playingSongInfo?.albumId) &&
            <span className="text-[#1ed760] ml-auto px-[8px] justify-self-end">
              <VolumeFillSvg className="w-[16px] h-[16px]" />
            </span>}
        </div>
        {isExpanded && <>
          <span style={{ gridArea: "addedAt" }} className="text-[12px] text-[#b3b3b3]">2 days ago</span>
          <span style={{ gridArea: "lastPlayedAt" }} className="text-right text-[12px] text-[#b3b3b3]">2 days ago</span>
        </>}
      </div>
    ))}
  </div>;
}

