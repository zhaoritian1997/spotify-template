"use client"
import React, { PropsWithChildren, createContext, useState } from "react"
import { PlayingSongInfo, AlbumInfo } from "@/types"


interface PlayingProviderProps {
  isPlaying: boolean
  showPlaying: boolean
  playingSongInfo: PlayingSongInfo
  albumList: AlbumInfo[]
  songList: PlayingSongInfo[]
  showLyrics: boolean
  showQueue: boolean
  showDevice: boolean
  playingAlbumInfo: AlbumInfo
  setPlayingAlbumInfo: (playingAlbumInfo: AlbumInfo) => void
  setShowDevice: (showDevice: boolean) => void
  setIsPlaying: (isPlaying: boolean) => void
  setShowPlaying: (showPlaying: boolean) => void
  setPlayingSongInfo: (playingSongInfo: PlayingSongInfo) => void
  setAlbumList: (albumList: AlbumInfo[]) => void
  setSongList: (songList: PlayingSongInfo[]) => void
  setShowLyrics: (showLyrics: boolean) => void
  setShowQueue: (showQueue: boolean) => void
}

export const PlayingContext = createContext<PlayingProviderProps>({
  isPlaying: false,
  playingSongInfo: {} as PlayingSongInfo,
  showPlaying: false,
  albumList: [],
  songList: [],
  showLyrics: false,
  showQueue: false,
  showDevice: false,
  playingAlbumInfo: {} as AlbumInfo,
  setPlayingAlbumInfo: () => {
  },
  setShowQueue: () => {
  },
  setShowLyrics: () => {
  },
  setSongList: () => {
  },
  setAlbumList: () => {
  },
  setIsPlaying: () => {
  },
  setPlayingSongInfo: () => {
  },
  setShowPlaying: () => {
  },
  setShowDevice: () => {
  },
})

export const PlayingProvider = ({ children }: PropsWithChildren) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playingSongInfo, setPlayingSongInfo] = useState<PlayingSongInfo>({} as PlayingSongInfo)
  const [showPlaying, setShowPlaying] = useState(true)
  const [playingAlbumInfo, setPlayingAlbumInfo] = useState<AlbumInfo>({} as AlbumInfo)
  const [albumList, setAlbumList] = useState<AlbumInfo[]>([])
  const [songList, setSongList] = useState<PlayingSongInfo[]>([])
  const [showLyrics, setShowLyrics] = useState(false)
  const [showQueue, setShowQueue] = useState(false)
  const [showDevice, setShowDevice] = useState(false)
  const contextValue: PlayingProviderProps = {
    isPlaying,
    playingSongInfo,
    showPlaying,
    albumList,
    songList,
    showLyrics,
    showQueue,
    showDevice,
    playingAlbumInfo,
    setPlayingAlbumInfo,
    setShowDevice, setIsPlaying,
    setPlayingSongInfo, setAlbumList,
    setShowPlaying, setSongList, setShowLyrics, setShowQueue,
  }
  return <PlayingContext.Provider value={contextValue}>{children}</PlayingContext.Provider>
}

