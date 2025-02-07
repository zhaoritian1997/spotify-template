import { useContext } from "react"
import { PlayingContext } from "@/hooks/PlayProvider"

export const usePlayingProvider = () => useContext(PlayingContext)