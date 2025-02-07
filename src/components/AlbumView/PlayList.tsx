import React, { useState } from "react";
import { PlaySvg, PauseSvg, AddSvg, CheckMarkSvg, MenuSvg, ListSvg, CompactSvg, DurationSvg, SearchSvg, AddToQueueSvg, SongRadioSvg, GoToArtistSvg, ViewCreditsSvg, ShareSvg, LogoSvg, PlusSvg } from "@/components/svgComponents";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import PlayerItem from "./PlayerItem";
import PlayerFooter from "./PlayerFooter";
export default function PlayList({ isShowPlayerHeader }: { isShowPlayerHeader?: boolean }) {
  const { isPlaying, setIsPlaying, playingAlbumInfo, albumList } = usePlayingProvider();
  const isLibrary = albumList?.some((item) => item.id === playingAlbumInfo?.id);
  const songs = playingAlbumInfo?.songs;
  const [viewType, setViewType] = useState<"list" | "compact">("list");
  return (<div className="flex flex-col mx-[-16px]">
    <div className="flex items-center justify-between h-[80px] p-[16px]" >
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full bg-[#1ed760] text-black cursor-pointer hover:bg-[#1ed760]/90 hover:scale-105 transition-all duration-300" onClick={() => setIsPlaying(!isPlaying)}>
          <span>
            {isPlaying ? <PauseSvg className="w-[20px] h-[20px]" /> : <PlaySvg className="w-[20px] h-[20px]" />}
          </span>
        </div>
        <span className={clsx("text-[14px] bg-[#1ed760] text-black w-[20px] h-[20px] rounded-full flex items-center justify-center cursor-pointer", isLibrary ? "bg-[#1ed760]" : "bg-white")}>
          {isLibrary ? <CheckMarkSvg className="w-[12px] h-[12px]" /> : <AddSvg className="w-[12px] h-[12px]" />}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="text-[14px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300">
              <MenuSvg className="w-[16px] h-[16px]" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="w-[213px] p-[4px] text-white bg-[#282828] border-none">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="p-0 text-white hover:text-white">
                <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                  <PlusSvg className="w-[16px] h-[16px]" />
                  Add to playlist</div>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="text-white p-0 bg-[#282828] border-none">
                  <DropdownMenuItem>
                    <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                      <SearchSvg className="w-[16px] h-[16px]" />
                      Search playlists
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                      <PlusSvg className="w-[16px] h-[16px]" />
                      New playlist</div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="p-0 text-white hover:text-white">
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <AddSvg className="w-[16px] h-[16px]" />
                Save to library Songs</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0 text-white hover:text-white">
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <AddToQueueSvg className="w-[16px] h-[16px]" />
                Add to queue</div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#fff] bg-opacity-10" />
            <DropdownMenuItem className="p-0 text-white hover:text-white" >
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <SongRadioSvg className="w-[16px] h-[16px]" />
                Go to song radio</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0 text-white hover:text-white">
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <GoToArtistSvg className="w-[16px] h-[16px]" />
                Go to artist</div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-0 text-white hover:text-white">
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <ViewCreditsSvg className="w-[16px] h-[16px]" />
                View credits</div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#fff] bg-opacity-10" />
            <DropdownMenuItem className="p-0 text-white hover:text-white" >
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <ShareSvg className="w-[16px] h-[16px]" />
                Share</div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#fff] bg-opacity-10" />
            <DropdownMenuItem className="p-0 text-white hover:text-white">
              <div className="w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10">
                <LogoSvg className="w-[16px] h-[16px]" />
                Open in desktop app</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-[8px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className={clsx("px-[8px] text-[14px] flex items-center gap-[4px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300", viewType === "list" ? "text-white" : "text-white/60")}>{viewType === "list" ? "List" : "Compact"}{viewType === "list" ? <ListSvg className="w-[16px] h-[16px]" /> : <CompactSvg className="w-[16px] h-[16px]" />}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start" className="w-[160px] p-[4px] text-white bg-[#282828] border-none">
            <DropdownMenuLabel className="text-[11px] font-bold text-white opacity-70 p-[12px]">View as</DropdownMenuLabel>
            <DropdownMenuCheckboxItem className={clsx("p-0", viewType === "compact" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={viewType === "compact"} onClick={() => setViewType("compact")}>
              <div className={clsx("w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", viewType === "compact" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>
                <CompactSvg className="w-[16px] h-[16px]" />
                Compact</div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className={clsx("p-0", viewType === "list" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={viewType === "list"} onClick={() => setViewType("list")}>
              <div className={clsx("w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", viewType === "list" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>
                <ListSvg className="w-[16px] h-[16px]" />
                List</div>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <div className={clsx("px-[16px] sticky top-[64px] z-10", isShowPlayerHeader && "border-b border-white/10 bg-[#1f1f1f]")}>
      <div className={clsx("h-[36px] px-[16px] flex items-center justify-between w-full", !isShowPlayerHeader && "border-t border-white/10")}>
        <div className="flex items-center gap-[16px]">
          <span className="text-[14px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300">#</span>
          <p className="text-[14px] text-white/60 w-[180px] truncate select-none cursor-pointer hover:text-white transition-all duration-300">Title</p>
        </div>
        {viewType === "compact" && <div className="flex-1 text-[14px] text-white/60 select-none cursor-pointer hover:text-white transition-all duration-300">Artist</div>}
        <div className="flex flex-shrink-0 w-[120px] text-white/60 justify-end">
          <DurationSvg className="w-[16px] h-[16px] mr-[32px]" />
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      {songs?.map((song, index) => (
        <PlayerItem key={song.id} song={song} index={index} viewType={viewType} />
      ))}
    </div>
    <PlayerFooter />
  </div>)
}