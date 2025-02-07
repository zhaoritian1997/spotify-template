import React from "react";
import Image from "next/image"
import { usePlayingProvider } from "@/hooks/usePlayProvider"
import { MuiscSvg, CollapseSvg, AddSvg, AddedSvg } from "@/components/svgComponents"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import clsx from "clsx"
export default function Contentinfo() {
  const { playingSongInfo, showPlaying, setShowPlaying, songList, setSongList, setPlayingSongInfo, albumList, setAlbumList } = usePlayingProvider()
  const addToLikedSongs = (songId: number) => {
    const newAlbumList = albumList.map(album => ({ ...album, songs: album.songs.map(song => ({ ...song, isAdd: song.id === songId ? true : false })) }))
    setAlbumList(newAlbumList)
    const newSongList = songList.map(song => ({ ...song, isAdd: song.id === songId ? true : false }))
    setSongList(newSongList)
    setPlayingSongInfo(newSongList.find(song => song.id === songId) || playingSongInfo)
  }
  return (
    <div className="w-[30%]  min-w-[180px] pl-[8px]">
      <div className="flex items-center justify-start">
        <div className="mr-[8px] rounded-[4px] overflow-hidden items-start">
          <div className="relative w-[56px] h-[56px] bg-[#282828] group select-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#b3b3b3]">
              <MuiscSvg className="w-[17px] h-[17px]" />
            </div>
            {playingSongInfo.image && <Image
              className="w-full h-full absolute top-0 left-0 z-0"
              src={playingSongInfo.image} alt={playingSongInfo.title} width={40} height={40} />}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className={clsx("z-10 absolute p-[10px] top-[6px] right-[6px] text-[#b3b3b3] bg-black rounded-full w-[24px] h-[24px] opacity-0 rotate-180 group-hover:opacity-100 group-hover:bg-black transition-opacity duration-300 hover:scale-105 hover:text-white", showPlaying && "rotate-0")} onClick={() => setShowPlaying(!showPlaying)}>
                  <CollapseSvg className="w-[12px] h-[12px]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={10} className="bg-[#1f1f1f] text-[#b3b3b3] rounded-[4px]">
                <p>Collapse</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="grid mx-[8px] items-center gap-x-[8px] "
          style={{
            gridTemplate: `"pretitle pretitle"
                          "title title"
                          "badges subtitle"/auto 1fr` }}>
          <div style={{ gridArea: "pretitle" }}>
            <a className="cursor-pointer text-[10px] text-white text-[14px] whitespace-nowrap hover:underline hover:decoration-2">
              {playingSongInfo.title}
            </a>
          </div>
          <div style={{ gridArea: "title" }}>
            <a className="cursor-pointer text-[10px] text-[#b3b3b3] text-[12px] whitespace-nowrap hover:text-white hover:underline">
              {playingSongInfo.artist}
            </a>
          </div>
        </div>
        {playingSongInfo.isAdd ?
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center justify-center text-[#1ed760] hover:text-[#1ed760] hover:scale-105">
                <AddedSvg className="w-[16px] h-[16px] " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={10} className="bg-[#1f1f1f] text-[#b3b3b3] rounded-[4px]">
              <p>Added to playlist</p>
            </TooltipContent>
          </Tooltip>
          : <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center justify-center text-[#b3b3b3] hover:text-white hover:scale-105" onClick={() => addToLikedSongs(playingSongInfo.id)}>
                <AddSvg className="w-[16px] h-[16px] " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={10} className="bg-[#1f1f1f] text-[#b3b3b3] rounded-[4px]">
              <p>Add to Liked Songs</p>
            </TooltipContent>
          </Tooltip>}
      </div>
    </div>
  )
}