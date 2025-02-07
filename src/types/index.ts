
export interface AlbumInfo {
  id: number
  songs: PlayingSongInfo[]
  name: string
  image: string
  artist: string
  time?: string
  type?: "Album" | "Playlist" | "Artist"
  isPinned?: boolean
  DateAdded?: string
  played?: string
  year?: string
}


export interface PlayingSongInfo {
  id: number
  albumId: number
  title: string
  artist: string
  album: string
  image: string
  artistImage: string
  isAdd: boolean
  duration: string
}