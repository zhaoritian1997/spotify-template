import React, { useRef, useState, useMemo, useEffect } from "react";
import { usePlayingProvider } from "@/hooks/usePlayProvider"
import { Button } from "@/components/ui/button"
import { PauseSvg, PlaySvg, ShuffleSvg, PreviousSvg, NextSvg, RepeatSvg, LoopOneSvg } from "@/components/svgComponents"
import clsx from "clsx"
import { Slider } from "@/components/ui/slider"
import { formatTimeToCount, formatCountToTime } from "@/lib/utils"
const repostStateList = ['disabledRepost', 'repost', 'loopOne']

const defaultTime = '0:00'
export default function Player() {
  const { isPlaying, setIsPlaying, songList, playingSongInfo, setPlayingSongInfo } = usePlayingProvider()
  const [isShuffle, setIsShuffle] = useState(false)
  const [repostState, setRepostState] = useState(repostStateList[0])
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [currentTimeCount, setCurrentTimeCount] = useState<number>(0)
  const [duration, setDuration] = useState(defaultTime)
  const changeRepostState = () => {
    const index = repostStateList.indexOf(repostState)
    const nextIndex = index === repostStateList.length - 1 ? 0 : index + 1
    setRepostState(repostStateList[nextIndex])
  }
  const prevSong = () => {
    setCurrentTimeCount(0)
    if (songList.length === 0) return
    const currentIndex = songList.findIndex(item => item.id === playingSongInfo.id)
    if (currentIndex === 0) return
    setPlayingSongInfo(songList[currentIndex - 1])
  }
  const nextSong = () => {
    setCurrentTimeCount(0)
    if (songList.length === 0) return
    const currentIndex = songList.findIndex(item => item.id === playingSongInfo.id)
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * songList.length)
      if (randomIndex === currentIndex) {
        nextSong()
      } else {
        setPlayingSongInfo(songList[randomIndex])
      }
    } else {
      if (isRepost && currentIndex === songList.length - 1) {
        setPlayingSongInfo(songList[0])
      } else if (currentIndex === songList.length - 1) {
        return
      } else {
        setPlayingSongInfo(songList[currentIndex + 1])
      }
    }
  }
  const togglePlay = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }
  const play = () => {
    setIsPlaying(true)
    const maxCount = formatTimeToCount(duration)
    timer.current = setInterval(() => {
      setCurrentTimeCount((prevCount) => {
        if (prevCount >= maxCount) {
          if (timer.current) {
            clearInterval(timer.current)
          }
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);
  }
  const pause = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    setIsPlaying(false)
  }
  const parseTime = (count: number) => {
    return formatCountToTime(count)
  }
  const onValueChange = (value: number[]) => {
    const count = value[0]
    setCurrentTimeCount(count)
  }
  const { isLoop, isRepost } = useMemo(() => {
    return {
      isLoop: repostState === repostStateList[2],
      isRepost: repostState === repostStateList[1]
    }
  }, [repostState])
  useEffect(() => {
    if (playingSongInfo.id) {
      setDuration(playingSongInfo.duration)
      setCurrentTimeCount(0)
    }
  }, [playingSongInfo])
  useEffect(() => {
    if (currentTimeCount >= formatTimeToCount(duration)) {
      if (isLoop) {
        setCurrentTimeCount(0)
      } else if (isRepost) {
        nextSong()
      } else {
        pause()
      }
    }
  }, [currentTimeCount, duration, isLoop, isRepost])
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])
  return (
    <div className="max-w-[722px] w-[40%]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-nowrap gap-[16px] mb-[8px] w-full">
          <div className="justify-end gap-[8px] flex-1 flex">
            <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", isShuffle ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")} onClick={() => {
              setIsShuffle(!isShuffle)
            }}>
              <ShuffleSvg className="w-[16px] h-[16px] " />
            </Button>
            <Button variant="ghost" className="p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:text-white hover:scale-105" onClick={prevSong}>
              <PreviousSvg className="w-[16px] h-[16px] " />
            </Button>
          </div>
          <Button className="p-[8px] h-[32px] w-[32px] rounded-full bg-white text-[#000] hover:bg-white/90 hover:scale-105" onClick={togglePlay}>
            {isPlaying ? <PauseSvg /> : <PlaySvg />}
          </Button>
          <div className="gap-[8px] flex-1 flex">
            <Button variant="ghost" className="p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:text-white hover:scale-105" onClick={nextSong}>
              <NextSvg className="w-[16px] h-[16px] " />
            </Button>
            <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:text-white hover:scale-105 relative", (isLoop || isRepost) ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")} onClick={changeRepostState}>
              {isLoop ? <LoopOneSvg className="w-[16px] h-[16px]" /> : <RepeatSvg className="w-[16px] h-[16px]" />}
            </Button>
          </div>
        </div>
        <div className=" flex w-full gap-[8px] items-center justify-between ">
          <div className="text-right font-normal min-w-[40px] text-[#b3b3b3] text-[12px]">{parseTime(currentTimeCount)}</div>
          <div className="relative flex-[1_auto] flex items-center h-[12px] group/slider cursor-pointer">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[4px] bg-[#fff] bg-opacity-30 rounded-full overflow-hidden">
              <div className="absolute w-full h-full bg-[#fff] rounded-full" style={{
                left: `-${currentTimeCount > 0 ? 100 - (currentTimeCount / formatTimeToCount(duration) * 100) : 100}%`
              }} />
            </div>
            <Slider value={[currentTimeCount]} onValueChange={onValueChange} max={formatTimeToCount(duration)} min={0} step={1} className="w-full group-hover/slider:opacity-100 opacity-0 transition-opacity duration-300" />
          </div>
          <div className="text-left font-normal min-w-[40px] text-[#b3b3b3] text-[12px]">{duration}</div>
        </div>
      </div>
    </div>
  )
}