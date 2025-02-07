"use client"
import React, { useRef } from 'react';
import MianViewHeader from "./MianViewHeader";
import MianViewFooter from "./MianViewFooter";
import HeaderImage from "@/assets/images/header-bg.svg"
import { useScroll } from 'ahooks';
import CarouselView from "./CarouselView";
import clsx from 'clsx';
import { usePlayingProvider } from '@/hooks/usePlayProvider';
export default function MainView() {
  const { albumList } = usePlayingProvider();
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const isScroll = scroll?.top && scroll.top > 10;
  const filterAlbumeList = albumList.filter(item => item.type === 'Album')
  return (
    <div className='w-full rounded-[8px] overflow-x-hidden overflow-y-auto flex-1 flex flex-col bg-[#121212]  relative' ref={ref}>
      <div className="absolute top-0 left-0 right-0 w-full h-[256px] bg-[#989898]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .6) 0, #121212 100%), url(${HeaderImage.src})` }} />
      <div className="flex-shrink-0 px-[40px]">
        <div className="flex-shrink-0 sticky top-0 z-10">
          <div className={clsx("absolute top-0 left-0 right-0  mx-[-40px] h-full bg-[#989898] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:w-full after:h-full after:bg-black/60 transition-opacity duration-300", isScroll ? "opacity-100" : "opacity-0")} />
          <MianViewHeader />
        </div>
        <div className="flex-1 flex flex-col min-h-0 relative z-11 pt-[4px] gap-[16px]">
          <CarouselView key="Episodes for you" title="Episodes for you" list={filterAlbumeList} />
          <CarouselView key="Recently played" title="Recently played" size="sm" list={filterAlbumeList} />
          <CarouselView key="Episodes you might like" title="Episodes you might like" list={filterAlbumeList} />
          <CarouselView key="To get you started" title="To get you started" list={filterAlbumeList} />
          <CarouselView key="Recommended for today" title="Recommended for today" list={filterAlbumeList} />
          <CarouselView key="USA`s Best for today" title="USA`s Best" list={filterAlbumeList} />
          <CarouselView key="Shows to try" title="Shows to try" list={filterAlbumeList} />
          <CarouselView key="Throwback" title="Throwback" list={filterAlbumeList} />
          <CarouselView key="Mood" title="Mood" list={filterAlbumeList} />
          <CarouselView key="Try something else" title="Try something else" list={filterAlbumeList} />
          <CarouselView key="Today's biggest hits" title="Today's biggest hits" list={filterAlbumeList} />
          <CarouselView key="Featured Charts" title="Featured Charts" list={filterAlbumeList} />
          <CarouselView key="Instrumental" title="Instrumental" list={filterAlbumeList} />
          <CarouselView key="Fresh new music" title="Fresh new music" list={filterAlbumeList} />
        </div>
        <MianViewFooter />
      </div>
    </div>
  )
}