import React from "react";
import { PlayingSongInfo, AlbumInfo } from "@/types";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaySvg } from '@/components/svgComponents'

interface NextInQueueProps {
  playingSongInfo: PlayingSongInfo;
}

export default function NextInQueueCard({ playingSongInfo }: NextInQueueProps) {
  const { songList, albumList, setPlayingSongInfo } = usePlayingProvider();
  const currentSongInfoIndex = songList.findIndex((item) => item.id === playingSongInfo.id);
  const nextSongInfoIndex = currentSongInfoIndex + 1;
  const nextSongInfo = songList.length > nextSongInfoIndex ? songList[nextSongInfoIndex] : null;
  if (!nextSongInfo) return null;
  const nextSongInfoAlbum = albumList.find((item) => item.id === nextSongInfo.albumId) || { name: "Unknown Album" } as AlbumInfo;
  const playNextSong = () => {
    setPlayingSongInfo(nextSongInfo);
  }
  return <div className="flex-shrink-0 flex flex-col gap-[4px] p-[16px_8px]  flex flex-col bg-[#1f1f1f] rounded-[8px] mb-[16px]">
    <div className="flex px-[8px] items-center justify-between">
      <span className="text-[16px] text-white font-bold">Next in queue</span>
      <Button variant="ghost" className="text-[14px] text-[#b3b3b3] p-0 hover:underline hover:scale-105 transition-all duration-300">
        Open queue
      </Button>
    </div>
    <div className="flex gap-[16px] w-full overflow-hidden  h-[64px] p-[8px] hover:bg-white/10 rounded-[4px] cursor-pointer group/next-in-queue">
      <div className="flex flex-col flex-shrink-0  rounded-[4px] w-[48px] h-[48px]  items-center justify-center relative" >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center opacity-0 group-hover/next-in-queue:opacity-100 transition-all duration-300" onClick={playNextSong}>
          <PlaySvg className="w-[24px] h-[24px] text-white" />
        </div>
        <Image src={nextSongInfo.image} alt={nextSongInfo.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1 flex-shrink-0">
        <h3 className="mb-[4px] w-full text-white overflow-hidden ellipsis text-[16px] font-bold">{nextSongInfo.title}</h3>
        <p className="text-[14px] w-[270px] text-ellipsis overflow-hidden whitespace-nowrap text-[#b3b3b3]">{nextSongInfoAlbum.type === 'Album' && nextSongInfoAlbum.name}</p>
      </div>
    </div>
  </div>;
}




