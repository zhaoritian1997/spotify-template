import React from "react";
import { PlayingSongInfo, AlbumInfo } from "@/types";
import { MenuSvg, CloseSvg, PlusSvg, AddSvg, AddToQueueSvg, SearchSvg, SongRadioSvg, GoToArtistSvg, ViewCreditsSvg, ShareSvg, LogoSvg } from "../svgComponents";
import { Button } from "../ui/button";
import { usePlayingProvider } from "@/hooks/usePlayProvider";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
interface PlayingViewHeaderProps {
  playingSongInfo: PlayingSongInfo;
}
export default function PlayingViewHeader({ playingSongInfo }: PlayingViewHeaderProps) {
  const { albumList } = usePlayingProvider();
  const album = albumList.find((album) => album.id === playingSongInfo.albumId) || { name: "Unknown Album" } as AlbumInfo;

  const matchTitle = () => {
    if (album.type === 'Album') {
      return album.name;
    } else {
      return playingSongInfo.artist;
    }
  }
  const { setShowPlaying } = usePlayingProvider();
  return <div className="flex-shrink-0 px-[16px]">
    <div className="h-[64px] py-[8px] flex items-center">
      <a className="text-[16px] text-white font-bold hover:underline">{matchTitle()}</a>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-auto rounded-full p-[8px] h-[32px] w-[32px] hover:bg-white/10" variant="ghost" size="icon">
            <MenuSvg className="w-[16px] h-[16px]" />
          </Button>
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
      <Button className="rounded-full ml-[8px] p-[8px] h-[32px] w-[32px] hover:bg-white/10" variant="ghost" size="icon" onClick={() => setShowPlaying(false)}>
        <CloseSvg className="w-[16px] h-[16px]" />
      </Button>
    </div>
  </div>;

}