"use client"
import React, { useEffect, useMemo, useState } from "react";
import { AlbumInfo } from "@/types";
import clsx from 'clsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import Image from "next/image";
import { ArrowLeftSvg, ArrowRightSvg, PlaySvg, PauseSvg } from "@/components/svgComponents";
import { Button } from "@/components/ui/button";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
interface CarouselViewProps {
  title: string;
  list: AlbumInfo[];
  size?: 'sm' | 'md'
}
export default function CarouselView(props: CarouselViewProps) {
  const { title, list, size = 'md' } = props
  const { isPlaying, setIsPlaying, playingSongInfo, setPlayingSongInfo, setSongList, setPlayingAlbumInfo } = usePlayingProvider();
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const matchAlbum = (data: AlbumInfo, albumId: number) => {
    return data.id === albumId
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
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  const showLeftArrow = useMemo(() => {
    return current > 1
  }, [current])
  const showRightArrow = useMemo(() => {
    return current < count
  }, [current, count])
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center justify-between">
      <h2 className="text-[24px] font-bold hover:underline transition-all duration-300">{title}</h2>
      <Button variant="ghost" className="text-[14px] text-[#b3b3b3] p-0 hover:underline transition-all duration-300">
        Show all
      </Button>
    </div>
    <div className="flex gap-[16px] mx-[-40px]">
      <Carousel setApi={setApi} opts={{ align: "start", slidesToScroll: 3, }}
        className={clsx("flex-1 w-full before:content-[''] before:w-[120px] before:bg-gradient-to-r before:from-[rgba(18,18,18,0.7)] before:to-[rgba(0,0,0,0)]0 before:absolute before:left-0 before:top-0 before:h-full before:z-[1]  before:pointer-events-none before:opacity-0 after:content-[''] after:w-[120px] after:bg-gradient-to-l after:from-[rgba(18,18,18,0.7)] after:to-[rgba(0,0,0,0)]0 after:absolute after:right-0 after:top-0 after:h-full after:z-[1]  after:pointer-events-none after:opacity-0", showLeftArrow && "before:opacity-100", showRightArrow && "after:opacity-100")}
      >
        <CarouselContent className="pl-[40px]">
          {list.map((item) => (
            <CarouselItem key={item.id}
              className={clsx("p-[12px] basis-auto cursor-pointer hover:bg-[#3b3b3b] rounded-[8px] group/gridRow", size === 'sm' ? "w-[133px] h-[160px]" : "w-[177px] h-[253px]")}>
              <div className='rounded-[4px] overflow-hidden relative'>
                <div className={clsx("absolute  right-[10px] w-[48px] h-[48px] rounded-full bg-[#1ed760] text-black flex items-center justify-center transition-all duration-300", isPlaying && matchAlbum(item, playingSongInfo?.albumId) ? "bottom-[10px]" : "bottom-0 opacity-0 group-hover/gridRow:bottom-[10px] group-hover/gridRow:opacity-100")} onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  playAlbum(item)
                }}>
                  {isPlaying && matchAlbum(item, playingSongInfo?.albumId) ? <PauseSvg className="w-[20px] h-[20px]" /> : <PlaySvg className="w-[20px] h-[20px]" />}
                </div>
                <Image src={item.image} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col gap-[4px] mt-[8px]">
                <span className={clsx("font-bold text-white hover:underline transition-all duration-300 overflow-hidden ellipsis whitespace-nowrap", size === 'md' ? "text-[16px]" : "text-[12px]")}>{item.name}</span>
                {size === 'md' && <span className="text-[14px] text-[#b3b3b3] font-normal hover:underline transition-all duration-300">{item.artist}</span>}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showLeftArrow && <div className="absolute left-0 top-0 w-[32px] h-full group/left z-[2]">
          <div className="absolute -translate-x-full top-1/2 -translate-y-1/2 text-[#b3b3b3] bg-[#1f1f1f] w-full h-[32px] rounded-full flex items-center justify-center group-hover/left:text-white group-hover/left:bg-[#2a2a2a] group-hover/left:translate-x-[10px] transition-all duration-300 cursor-pointer">
            <ArrowLeftSvg className="w-[16px] h-[16px]" />
            <CarouselPrevious className="opacity-0 absolute top-1/2 left-0 w-full h-full disabled:opacity-0" />
          </div>
        </div>}
        {showRightArrow && <div className="absolute right-0 top-0 w-[32px] h-full group/right z-[2]">
          <div className="absolute translate-x-full top-1/2 -translate-y-1/2 text-[#b3b3b3] bg-[#1f1f1f] w-full h-[32px] rounded-full flex items-center justify-center group-hover/right:text-white group-hover/right:bg-[#2a2a2a] group-hover/right:translate-x-[-10px] transition-all duration-300 cursor-pointer">
            <ArrowRightSvg className="w-[16px] h-[16px]" />
            <CarouselNext className="opacity-0 absolute top-1/2 left-0 w-full h-full disabled:opacity-0" />
          </div>
        </div>}
      </Carousel>
    </div>
  </div>;
}

