import React, { useState } from "react";
import { PlayingSongInfo } from "@/types";
import { Button } from "@/components/ui/button";
interface CreditsInfoProps {
  playingSongInfo: PlayingSongInfo;
}

export default function CreditsInfoCard({ playingSongInfo }: CreditsInfoProps) {
  const [isFollow, setIsFollow] = useState(false);
  return <div className="flex-shrink-0 p-[16px] flex flex-col gap-[12px] flex flex-col bg-[#1f1f1f] rounded-[8px]">
    <div className="flex items-center justify-between">
      <span className="text-[16px] text-white font-bold">Credits</span>
      <Button variant="ghost" className="text-[14px] text-[#b3b3b3] p-0 hover:underline hover:scale-105 transition-all duration-300">
        Show all
      </Button>
    </div>
    <div className="flex w-full items-center  justify-between  gap-[8px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <a className="text-[14px] text-white font-bold hover:underline">{playingSongInfo.artist}</a>
          <span className="text-[14px] text-[#b3b3b3]">Main Artist</span>
        </div>
        <Button size="sm" variant="outline" className="font-bold rounded-full p-[3px_15px] bg-[#1f1f1f] hover:scale-105 transition-all duration-300" onClick={() => setIsFollow(!isFollow)}>{isFollow ? "unFollow" : "Follow"}</Button>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-[14px] text-white font-bold">{playingSongInfo.artist}</span>
      <span className="text-[14px] text-[#b3b3b3]">Composer, Lyricist</span>
    </div>
  </div>;
}




