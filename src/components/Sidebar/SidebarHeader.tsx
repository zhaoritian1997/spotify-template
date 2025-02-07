import React, { useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { LibrarySvg, LibraryCollapseSvg, PlusSvg, ShowMoreSvg, CreatePlayListSvg, CreateFoldSvg, CloseSvg } from "@/components/svgComponents";
import clsx from "clsx";
import RecentlyAdded from "./RecentlyAdded";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SearchLibrary from "./SearchLibrary";
import { SidebarContext } from ".";
export default function SidebarHeader() {
  const { isCollapsed, isExpanded, setIsCollapsed, setIsExpanded, setWidth, filterType, setFilterType } = useContext(SidebarContext);
  useEffect(() => {
    setWidth(isCollapsed ? 72 : isExpanded ? 584 : 420);
  }, [isCollapsed, isExpanded, setWidth]);
  const changeFilterType = (type: "all" | "Artist" | "Album" | "Playlist") => {
    setFilterType(type)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-[8px] p-[12px_16px_8px]">
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px] min-w-0 me-[auto]">
            <button className="p-[4px_8px] h-[40px] flex items-center justify-start gap-0 flex-shrink-0 whitespace-nowrap text-[16px] 
            font-bold text-[#b3b3b3] hover/library:text-white
            group/library" style={{ minBlockSize: '40px' }}
              onClick={() => setIsCollapsed(!isCollapsed)}>
              <div className="flex me-[12px] text-[#b3b3b3] group-hover/library:text-white">
                {isCollapsed ? <LibraryCollapseSvg className="w-[24px] h-[24px]" /> : <LibrarySvg className="w-[24px] h-[24px]" />}
              </div>
              {isCollapsed ? "" : "Your Library"}
            </button>
          </div>
          {!isCollapsed ? <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-[8px] h-[32px] flex flex-shrink-0 text-[#b3b3b3] hover:text-white hover:bg-[#282828] rounded-full">
                  <PlusSvg className="w-[16px] h-[16px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="bottom" align="end" className="w-[200px] bg-[#282828] p-[4px]">
                <DropdownMenuItem className="p-0">
                  <Button variant="ghost" className="flex items-center justify-start w-full gap-[12px] p-[12px] text-white
                hover:bg-white hover:bg-opacity-10 hover:text-white">
                    <CreatePlayListSvg className="w-[16px] h-[16px]" />Create Playlist
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Button variant="ghost" className="flex items-center justify-start w-full gap-[12px] p-[12px] text-white hover:bg-white hover:bg-opacity-10 hover:text-white">
                    <CreateFoldSvg className="w-[16px] h-[16px]" />Create a playlist folder
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="p-[8px] h-[32px] flex flex-shrink-0 text-[#b3b3b3] hover:text-white hover:bg-[#282828] rounded-full" onClick={() => setIsExpanded(!isExpanded)}>
              <ShowMoreSvg className={clsx("w-[16px] h-[16px]", isExpanded && "rotate-180")} />
            </Button></> : null}
        </div>
      </div>
      {!isCollapsed ? <>
        <div className="flex items-center gap-[8px] m-[8px_16px]">
          <div className="scroll-smooth flex-cneter overflow-x-scroll whitespace-nowrap w-full scroll-smooth will-change-transform" style={{ scrollbarWidth: "none" }}>
            <div className="flex items-center">
              {filterType !== 'all' ? <Button variant='ghost' size='sm' className="p-[8px] text-white text-[14px] bg-[#282828] mr-[8px]  hover:bg-opacity-20 hover:bg-white rounded-full" onClick={() => changeFilterType('all')} ><CloseSvg className="w-[16px] h-[16px]" /></Button> : null}
              {filterType === 'all' || filterType === 'Playlist' ? <Button variant='ghost' size='sm' className={clsx("p-[4px_12px] text-white text-[14px] bg-[#282828] mr-[8px]  hover:bg-opacity-20 hover:bg-white rounded-full", filterType === 'Playlist' && "bg-white text-black")} onClick={() => changeFilterType('Playlist')} >Playlists</Button> : null}
              {filterType === 'all' || filterType === 'Artist' ? <Button variant='ghost' size='sm' className={clsx("p-[4px_12px] text-white text-[14px] bg-[#282828] mr-[8px]  hover:bg-opacity-20 hover:bg-white rounded-full", filterType === 'Artist' && "bg-white text-black")} onClick={() => changeFilterType('Artist')} >Artists</Button> : null}
              {filterType === 'all' || filterType === 'Album' ? <Button variant='ghost' size='sm' className={clsx("p-[4px_12px] text-white text-[14px] bg-[#282828] mr-[8px]   rounded-full ", filterType === 'Album' ? "bg-white text-black hover:bg-white hover:text-black" : "hover:bg-opacity-20 hover:bg-white")}
                onClick={() => changeFilterType('Album')}
              >Albums</Button> : null}
            </div>
          </div>
          {isExpanded && <div className="mr-auto flex items-center gap-[8px]">
            <SearchLibrary />
            <RecentlyAdded />
          </div>}
        </div>
        {isExpanded && <div className="mx-[16px] h-[32px]  border-b border-b-[rgba(255,255,255,.1)] grid grid-cols-[1fr_20%_20%] items-center gap-[24px]" style={{ gridTemplateAreas: `"listRow addedAt lastPlayedAt"` }}>
          <span className="pe-[calc(20% * 2 + 24px * 2)] text-[0.75rem] text-[#b3b3b3] font-bold" style={{ gridArea: "1 / listRow / 1 / lastPlayedAt" }}>Title</span>
          <span className="pe-[calc(20% * 2 + 24px * 2)] text-[0.75rem] text-[#b3b3b3] font-bold" style={{ gridArea: "addedAt" }}>Date Added</span>
          <span className="pe-[calc(20% * 2 + 24px * 2)] text-right text-[0.75rem] text-[#b3b3b3] font-bold" style={{ gridArea: "lastPlayedAt" }}>Played</span>
        </div>}
        {!isExpanded && <div className="w-full p-[2px_12px_0_16px] flex items-center justify-between gap-[8px]">
          <SearchLibrary />
          <RecentlyAdded />
        </div>}</> : null}
    </div>
  )
}