"use client"
import { useEffect } from "react"
import Sidebar from "@/components/Sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PlayingView from "@/components/PlayingView"
import { usePlayingProvider } from "@/hooks/usePlayProvider"
import { mockAlbumList } from "@/data/mockData"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { showPlaying, setPlayingSongInfo, setAlbumList, setSongList } = usePlayingProvider()
  const initData = () => {
    console.log('mockAlbumList :', mockAlbumList);
    setAlbumList(mockAlbumList)
    const songList = mockAlbumList[0].songs
    setSongList(songList)
    setPlayingSongInfo(songList[0])
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      initData()
    }
  }, [])
  return (
    <TooltipProvider>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] gap-[8px]  h-full min-h-full p-[8px] relative w-full bg-black text-white" style={{
        gridTemplateAreas: `"global-nav global-nav global-nav"
        "left-sidebar main-view right-sidebar"
        "now-playing-bar now-playing-bar now-playing-bar"`}}>
        <Header />
        <Sidebar />
        <main className="overflow-hidden flex flex-col" style={{ gridArea: "main-view" }}>
          {children}
        </main>
        {showPlaying && <PlayingView />}
        <Footer />
      </div>
    </TooltipProvider>
  )
}