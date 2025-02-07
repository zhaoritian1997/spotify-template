import React, { useState } from "react";
import { PlayingSongInfo, AlbumInfo } from "@/types";
import Image from "next/image";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { Button } from "@/components/ui/button";

interface ArtistInfoProps {
  playingSongInfo: PlayingSongInfo;
}

export default function ArtistInfoCard({ playingSongInfo }: ArtistInfoProps) {
  const { albumList } = usePlayingProvider();
  const [isFollow, setIsFollow] = useState(false);
  const album = albumList.find((item) => item.id === playingSongInfo.albumId) || { name: "Unknown Album" } as AlbumInfo;


  const matchImg = () => {
    if (album.type === 'Album') {
      return album.image;
    } else {
      return playingSongInfo.artistImage;
    }
  }
  return <div className="flex-shrink-0 mb-[8px] gap-[16px] flex flex-col bg-[#1f1f1f] rounded-[8px]">
    <div className="rounded-[8px] overflow-hidden relative aspect-square cursor-pointer">
      <div className="absolute p-[16px] text-[14px] top-0 left-0 flex items-center justify-center text-white text-[16px] font-bold" style={{   textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        About the artist
      </div>
      {matchImg() ? <Image src={matchImg()} alt='album' className="object-cover w-full h-full" /> : <div className="w-full h-full bg-gray-400"></div>}
    </div>
    <div className="flex flex-col p-[16px] gap-[8px]">
      <a className="text-[24px] text-white font-bold cursor-pointer hover:underline">{playingSongInfo.artist}</a>
      <div className="flex items-center justify-between">
        <a className="text-[16px] text-[#b3b3b3] cursor-pointer">1,163,753 monthly listeners</a>
        <Button size="sm" variant="outline" className="font-bold rounded-full p-[3px_15px] bg-[#1f1f1f] hover:scale-105 transition-all duration-300" onClick={() => setIsFollow(!isFollow)}>{isFollow ? "unFollow" : "Follow"}</Button>
      </div>
      <div className="w-full text-ellipsis overflow-hidden mb-[8px]" style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
        The Beast is back!
        And it‘s ready to crush the known boundaries of melodic metal!
        Beast In Black, the international battalion of ground breaking melodic metallers, is ready to blow your mind with their third album ominously titled ‚Dark Connection‘ (out Oct 29th, 2021).
        If you&apos;re into melodic and atmospheric heavy metal with an insanely catchy twist, this is the album you&apos;re looking for. There&apos;s no other creature like this walking the earth. None other bears these sharp-edged riffs or piercing choruses. Not with these epic sci-fi, fantasy and cyberpunk stories to tell. Beast In Black is a wholly unique form of heavy metal evolution.
        ‚Dark Connection‘ is an album which gathers the raw melodic energy of ‚Berserker‘, the powerful choruses of ‚From Hell With Love‘, topping them up with the utilization of wildly tuneful guitars and multi-layered synthesizers.
      </div>
    </div>
  </div>;
}



