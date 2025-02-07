import { PlayingSongInfo, AlbumInfo } from "@/types"
import * as covers from '../assets/images/cover';

const albumTypes = ["Album", "Playlist", "Artist"] as const

const artistNames = [
  "The Weekend", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
]
const albumNames = [
  "After Hours", "1989", "÷ (Divide)", "Happier Than Ever", "Certified Lover Boy",
  "30", "Hollywood's Bleeding", "Future Nostalgia", "Justice", "Positions",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
  "The Weeknd", "Taylor Swift", "Ed Sheeran", "Billie Eilish", "Drake",
  "Adele", "Post Malone", "Dua Lipa", "Justin Bieber", "Ariana Grande",
  "Travis Scott", "Nicki Minaj", "Miley Cyrus", "Katy Perry", "Selena Gomez",
  "Kendrick Lamar", "Lady Gaga", "Bruno Mars", "Rihanna", "Eminem",
]
const songNames = [
  "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You",
  "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights",
  "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road",
  "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep",
  "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You",
  "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights",
  "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road",
  "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep",
  "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You",
  "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights",
  "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road",
  "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep",
  "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You",
  "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights",
  "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road",
  "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep",
  "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You",
  "Blinding Lights", "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights",
  "Old Town Road", "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road",
  "Rolling in the Deep", "Shape of You", "Blinding Lights", "Old Town Road", "Rolling in the Deep",
]

//随机1-53
const randomCover = () => {
  return Math.floor(Math.random() * 53) + 1
}

// 创建10个不同的歌曲列表
const createSongList = (albumId: number, artistName: string, albumName: string, count: number): PlayingSongInfo[] => {
  const songList = Array.from({ length: count }, (_, index) => {
    //@ts-expect-error-next-line
    const cover = covers[`cover_${randomCover()}`] as string
    //@ts-expect-error-next-line
    const artistImage = covers[`cover_${randomCover()}`] as string
    return {
      id: albumId * 100 + index + 1,
      albumId,
      title: songNames[index],
      artist: artistName,
      album: albumName,
      image: cover,
      artistImage: artistImage,
      isAdd: Math.random() > 0.8,
      duration: `${Math.floor(Math.random() * 4) + 2}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`,
    }
  })
  return songList

}


export const mockAlbumList: AlbumInfo[] = Array.from({ length: 30 }, (_, index) => {
  const randomArtist = artistNames[Math.floor(Math.random() * artistNames.length)]
  const randomType = albumTypes[Math.floor(Math.random() * albumTypes.length)]
  const randomSongList = createSongList(index + 1, randomArtist, randomType === 'Playlist' ? `Playlist_${index + 1}` : albumNames[index], Math.floor(Math.random() * 8) + 4)
  const totalMinutes = randomSongList.reduce((acc, song) => {
    const [min, sec] = song.duration.split(':').map(Number)
    return acc + min + sec / 60
  }, 0)
  //@ts-expect-error-next-line
  const cover = covers[`cover_${randomCover()}`] as string
  return {
    id: index + 1,
    name: `${randomType === 'Playlist' ? 'Playlist_' + index : albumNames[index]}`,
    image: cover,
    artist: randomArtist,
    time: `${Math.round(totalMinutes)}min`,
    songs: randomSongList,
    type: randomType,
    isPinned: Math.random() > 0.8,
    year: `${Math.floor(Math.random() * 10) + 2010}`,
  }
})
