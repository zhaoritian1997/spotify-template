"use client"
import React, { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PlayNowSvg, LysicsSvg, QueueSvg, ConnectToADeviceSvg, Volume_1_Svg, Volume_2_Svg, Volume_3_Svg, OpenMiniPlayerSvg, FullScreenSvg, VolumeMuteSvg, ExitFullScreenSvg } from "@/components/svgComponents";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { Slider } from "@/components/ui/slider";
import clsx from "clsx";
export default function ButtonTertiary() {
  const { showPlaying, setShowPlaying, showLyrics, setShowLyrics, showQueue, setShowQueue, showDevice, setShowDevice } = usePlayingProvider();
  const [openMiniPlayer, setOpenMiniPlayer] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(100);
  const cacheShowPlaying = useRef(showPlaying)
  const volumeIcon = useMemo(() => {
    if (volume > 66) return <Volume_3_Svg />;
    if (volume > 33) return <Volume_2_Svg />;
    if (volume > 0) return <Volume_1_Svg />;
    if (volume === 0) return <VolumeMuteSvg />;
    return <Volume_1_Svg />;
  }, [volume]);
  const switchIcon = (type: string) => {
    if (type === "fullScreen") {
      setIsFullScreen(!isFullScreen)
    } else {
      setShowPlaying(false)
      setShowLyrics(false)
      setShowQueue(false)
      setShowDevice(false)
      setOpenMiniPlayer(false)
      switch (type) {
        case "playing":
          setShowPlaying(!showPlaying)
          break;
        case "lyrics":
          if (showLyrics) {
            setShowPlaying(cacheShowPlaying.current)
          } else {
            cacheShowPlaying.current = showPlaying
          }
          setShowLyrics(!showLyrics)
          break;
        case "queue":
          if (showQueue) {
            setShowPlaying(cacheShowPlaying.current)
          } else {
            cacheShowPlaying.current = showPlaying
          }
          setShowQueue(!showQueue)
          break;
        case "device":
          if (showDevice) {
            setShowPlaying(cacheShowPlaying.current)
          } else {
            cacheShowPlaying.current = showPlaying
          }
          setShowDevice(!showDevice)
          break;
        case "miniPlayer":
          if (openMiniPlayer) {
            setShowPlaying(cacheShowPlaying.current)
          } else {
            cacheShowPlaying.current = showPlaying
          }
          setOpenMiniPlayer(!openMiniPlayer)
          break;
        default:
          break;
      }
    }
  }
  return (
    <div className="min-w-[180px] w-[30%] justify-end">
      <div className="flex flex-grow justify-end items-center">
        <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", showPlaying ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")}
          onClick={() => {
            switchIcon("playing")
          }}>
          <PlayNowSvg />
        </Button>
        <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", showLyrics ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")}
          onClick={() => {
            switchIcon("lyrics")
          }}>
          <LysicsSvg />
        </Button>
        <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", showQueue ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")}
          onClick={() => {
            switchIcon("queue")
          }}>
          <QueueSvg />
        </Button>
        <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", showDevice ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")}
          onClick={() => {
            switchIcon("device")
          }}>
          <ConnectToADeviceSvg />
        </Button>
        <div className="relative flex items-center flex-[0_1_125px] mr-[8px] group/slider cursor-pointer">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[calc(100%-32px)] ml-[32px] h-[4px] bg-[#fff] bg-opacity-30 rounded-full overflow-hidden">
            <div className="absolute w-full h-full bg-[#fff] rounded-full" style={{
              left: `-${volume > 0 ? 100 - (volume / 100 * 100) : 100}%`
            }} />
          </div>
          <Button className="w-[32px] h-[32px] p-[8px] text-[#b3b3b3] group-hover/slider:text-white"
            onClick={() => {
              setVolume(volume === 0 ? 100 : 0)
            }}
          >
            {volumeIcon}
          </Button>
          <Slider value={[volume]} onValueChange={(value) => setVolume(value[0])} max={100} min={0} step={1} className="w-full group-hover/slider:opacity-100 opacity-0 transition-opacity duration-300" />
        </div>
        <Button variant="ghost" className={clsx("p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative", openMiniPlayer ? "text-[#1db954] hover:text-[#1db954] before:content-[''] before:absolute before:bg-[#1db954] before:w-[4px] before:h-[4px]  before:rounded-full before:left-[50%] before:bottom-0 before:translate-x-[-50%]" : "text-[#b3b3b3] hover:text-white")}
          onClick={() => {
            switchIcon("miniPlayer")
          }}>
          <OpenMiniPlayerSvg />
        </Button>
        <Button variant="ghost" className="p-[8px] flex items-center justify-center h-[32px] w-[32px] text-[#b3b3b3] hover:scale-105 relative"
          onClick={() => {
            switchIcon("fullScreen")
          }}>
          {isFullScreen ? <FullScreenSvg /> : <ExitFullScreenSvg />}
        </Button>
      </div>
    </div>
  )
} 