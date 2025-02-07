"user client"
import React, { useEffect, useRef } from "react";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import MianViewFooter from "../MianView/MianViewFooter";
import { useParams } from 'next/navigation'
import { useScroll } from 'ahooks';
import CarouselView from "../MianView/CarouselView";
import PlayerHeader from "./PlayerHeader";
import AlbumViewHeader from "./AlbumViewHeader";
import PlayList from "./PlayList";
import clsx from 'clsx';
export default function AlbumView() {
  const { albumList, setPlayingAlbumInfo } = usePlayingProvider();
  const params = useParams();
  const id = params.id as string;
  const album = albumList.find(item => item.id === Number(id));
  const filterAlbumeList = albumList.filter(item => item.type === 'Album')
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const isShowPlayerHeader = !!(scroll?.top && scroll.top > 186);
  useEffect(() => {
    if (id && album) {
      setPlayingAlbumInfo(album)
    }
  }, [id, album, setPlayingAlbumInfo])
  return <div className='w-full rounded-[8px] overflow-x-hidden overflow-y-auto flex-1 flex flex-col bg-[#121212]  relative' ref={ref}>
    <div className="flex-shrink-0">
      <div className={clsx("flex-shrink-0 sticky top-0 z-20 bg-[#1f1f1f]", isShowPlayerHeader ? "opacity-100 h-[64px]" : "h-0 opacity-0")}>
        <PlayerHeader />
      </div>
      <div className="flex-shrink-0 px-[16px] mb-[32px]">
        <AlbumViewHeader />
        <PlayList isShowPlayerHeader={isShowPlayerHeader} />
      </div>
      <div className="flex-1 flex flex-col min-h-0 relative z-11 pt-[4px] gap-[16px] px-[16px]">
        <CarouselView key={`More by ${album?.name}`} title={`More by ${album?.name}`} list={filterAlbumeList} />
      </div>
      <div className="flex-shrink-0 px-[40px]">
        <MianViewFooter />
      </div>
    </div>
  </div>

}


