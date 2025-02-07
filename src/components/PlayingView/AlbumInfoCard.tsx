"user client"
import React from "react";
import { PlayingSongInfo, AlbumInfo } from "@/types";
import Image from "next/image";
import { CopySongLinkSvg, AddSvg, AddedSvg } from "@/components/svgComponents";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import Link from "next/link";
interface AlbumInfoCardProps {
  playingSongInfo: PlayingSongInfo;
}

export default function AlbumInfoCard({ playingSongInfo }: AlbumInfoCardProps) {
  const { albumList } = usePlayingProvider();
  const album = albumList.find((item) => item.id === playingSongInfo.albumId) || { name: "Unknown Album" } as AlbumInfo;
  const matchImg = () => {
    if (album.type === 'Album') {
      return album.image;
    } else {
      return playingSongInfo.image;
    }
  }
  return <div className="flex-shrink-0 mb-[8px] gap-[16px] flex flex-col">
    <Link href={`/album/${album.id}`} className="rounded-[8px] overflow-hidden relative aspect-square cursor-pointer">
      {matchImg() ? <Image src={matchImg()} alt='album' className="object-cover w-full h-full" /> : <div className="w-full h-full bg-gray-400"></div>}
    </Link>
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <a className="text-[24px] text-white font-bold cursor-pointer hover:underline">{playingSongInfo.title}</a>
        <a className="text-[16px] text-white/60 cursor-pointer hover:underline">{playingSongInfo.artist}</a>
      </div>
      <div className="flex items-center gap-[8px]">
        <div className="cursor-pointer w-[24px] h-[24px] relative group">
          <CopySongLinkSvg className="absolute translate-x-[100%] left-0 w-[24px] h-[24px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        {playingSongInfo.isAdd ? <span className="cursor-pointer text-[#1ed760] hover:scale-105 transition-all duration-300">
          <AddedSvg className="w-[24px] h-[24px]" />
        </span> : <span className="cursor-pointer hover:scale-105 transition-all duration-300">
          <AddSvg className="w-[24px] h-[24px]" />
        </span>}
      </div>
    </div>
  </div>;
}