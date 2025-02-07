"use client"
import React, { useRef } from 'react';
import PlayingViewHeader from "./PlayingViewHeader";
import AlbumInfoCard from "./AlbumInfoCard";
import ArtistInfoCard from "./ArtistInfoCard";
import CreditsInfoCard from "./CreditsInfoCard";
import OnTourCard from "./OnTourCard";
import NextInQueueCard from "./NextInQueueCard";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { useScroll } from 'ahooks';
import clsx from 'clsx';
export default function PlayingView() {
  const ref = useRef(null);
  const { playingSongInfo } = usePlayingProvider();
  const scroll = useScroll(ref);
  const isShowShadow = scroll?.top && scroll.top > 10;
  return (
    <aside className="flex flex-col rounded-[8px] relative isolate overflow-hidden bg-[#121212]" style={{ gridArea: "right-sidebar", width: "420px" }}>
      <div className={clsx("z-10", isShowShadow && "shadow-[0_6px_10px_rgba(0,0,0,.6)]")}>
        <PlayingViewHeader playingSongInfo={playingSongInfo} />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden h-0 flex flex-col px-[16px] gap-[16px]" ref={ref}>
        <AlbumInfoCard playingSongInfo={playingSongInfo} />
        <ArtistInfoCard playingSongInfo={playingSongInfo} />
        <CreditsInfoCard playingSongInfo={playingSongInfo} />
        <OnTourCard playingSongInfo={playingSongInfo} />
        <NextInQueueCard playingSongInfo={playingSongInfo} />
      </div>
    </aside>
  )
}