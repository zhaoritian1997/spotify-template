import React, {useRef, useState, createContext } from "react";
import SidebarHeader from "./SidebarHeader";
import AlbumCompact from "./AlbumCompact";
import AlbumGrid from "./AlbumGrid";
import AlbumList from "./AlbumList";
import MiniAlbumGrid from "./MiniAlbumGrid";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { useScroll } from 'ahooks';
import clsx from 'clsx';

interface SidebarContextProps {
  width: number,
  setWidth: (width: number) => void,
  viewType: "list" | "grid" | "compact",
  setViewType: (viewType: "list" | "grid" | "compact") => void,
  isCollapsed: boolean,
  setIsCollapsed: (isCollapsed: boolean) => void,
  isExpanded: boolean,
  setIsExpanded: (isExpanded: boolean) => void,
  filterType: "all" | "Artist" | "Album" | "Playlist",
  setFilterType: (filterType: "all" | "Artist" | "Album" | "Playlist") => void,
  minColumnWidth: number,
  setMinColumnWidth: (minColumnWidth: number) => void,
}

export const SidebarContext = createContext<SidebarContextProps>({
  width: 420,
  setWidth: () => { },
  viewType: "list",
  setViewType: () => { },
  isCollapsed: false,
  setIsCollapsed: () => { },
  isExpanded: false,
  setIsExpanded: () => { },
  filterType: "all",
  setFilterType: () => { },
  minColumnWidth: 200,
  setMinColumnWidth: () => { },
})

export default function Sidebar() {
  const ref = useRef(null);
  const scroll = useScroll(ref);
  const isShowShadow = scroll?.top && scroll.top > 10;
  const { albumList } = usePlayingProvider()
  const [width, setWidth] = useState(420);
  const [viewType, setViewType] = useState<"list" | "grid" | "compact">("list");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const [filterType, setFilterType] = useState<"all" | "Artist" | "Album" | "Playlist">("all");
  const [minColumnWidth, setMinColumnWidth] = useState(130);
  const showViewComponent = (type: "list" | "grid" | "compact") => {
    if (isCollapsed) {
      return <MiniAlbumGrid list={albumList} />
    } else {
      if (type === "compact") {
        return <AlbumCompact list={albumList} />
      } else if (type === "grid") {
        return <AlbumGrid list={albumList} />
      } else if (type === "list") {
        return <AlbumList list={albumList} />
      }
    }
  }
  return (
    <SidebarContext.Provider value={{ width, setWidth, viewType, setViewType, isCollapsed, setIsCollapsed, isExpanded, setIsExpanded, filterType, setFilterType, minColumnWidth, setMinColumnWidth }}>
      <aside className="flex flex-col min-h-0 z-10 flex-shrink-0 overflow-hidden" style={{ gridArea: "left-sidebar", width: `${width}px` }}>
        <nav className="h-full gap-[8px] flex flex-col min-h-0">
          <div className="flex select-none  rounded-[8px] w-full flex-1 relative bg-[#121212]">
            <div className="flex flex-1 flex-col min-h-0  w-full">
              <div className={clsx("z-10", isShowShadow && "shadow-[0_6px_10px_rgba(0,0,0,.6)]")}>
                <SidebarHeader />
              </div>
              <div ref={ref} className="flex-1 grid grid-cols-1 overflow-y-auto overflow-x-hidden">
                {showViewComponent(viewType)}

              </div>
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  )
}
