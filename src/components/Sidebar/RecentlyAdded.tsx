import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ListSvg, CompactSvg, GridSvg } from "@/components/svgComponents"
import { Slider } from "@/components/ui/slider"
import clsx from "clsx";
import { useContext } from "react";
import { SidebarContext } from ".";
export default function RecentlyAdded() {
  const { viewType, setViewType, filterType, setMinColumnWidth, minColumnWidth } = useContext(SidebarContext);
  const [sortType, setSortType] = useState("Recently Added");
  const selectViesIcon = (type: "compact" | "list" | "grid") => {
    switch (type) {
      case "compact":
        return <CompactSvg className="w-[16px] h-[16px]" />
      case "list":
        return <ListSvg className="w-[16px] h-[16px]" />
      case "grid":
        return <GridSvg className="w-[16px] h-[16px]" />
    }
  }
  return (
    <div className="p-[4px_12px_4px_16px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-[8px] h-[32px] flex flex-shrink-0 text-[#b3b3b3] hover:text-[#fff] hover:scale-105">
            {filterType === 'all' ? 'Recently Added' : 'Recents'} {selectViesIcon(viewType)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end" className="w-[160px] p-[4px] text-white bg-[#282828] border-none">
          <DropdownMenuLabel className="text-[11px] font-bold text-white opacity-70 p-[12px]">Sort by</DropdownMenuLabel>
          <DropdownMenuCheckboxItem className={clsx("p-0", sortType === "Recents" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={sortType === "Recents"} onClick={() => setSortType("Recents")}>
            <div className={clsx("w-full h-full p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", sortType === "Recents" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>Recents</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className={clsx("p-0", sortType === "Recently Added" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={sortType === "Recently Added"} onClick={() => setSortType("Recently Added")}>
            <div className={clsx("w-full h-full p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", sortType === "Recently Added" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>Recently Added</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className={clsx("p-0", sortType === "Alphabetical" ? "text-[#1ed760] hove r:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={sortType === "Alphabetical"} onClick={() => setSortType("Alphabetical")}>
            <div className={clsx("w-full h-full p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", sortType === "Alphabetical" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>Alphabetical</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className={clsx("p-0", sortType === "Creator" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={sortType === "Creator"} onClick={() => setSortType("Creator")}>
            <div className={clsx("w-full h-full p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", sortType === "Creator" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>Creator</div>
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator className="bg-[#fff] bg-opacity-10" />
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
          <DropdownMenuCheckboxItem className={clsx("p-0", viewType === "grid" ? "text-[#1ed760] hover:text-[#1ed760] focus:text-[#1ed760]" : "text-white hover:text-white")} checked={viewType === "grid"} onClick={() => setViewType("grid")}>
            <div className={clsx("w-full h-full flex items-center gap-[16px] p-[12px_8px_12px_12px] text-[14px]  opacity-90 hover:bg-[#fff] hover:bg-opacity-10", viewType === "grid" ? "text-[#1ed760] hover:text-[#1ed760]" : "text-white")}>
              <GridSvg className="w-[16px] h-[16px]" />
              Grid</div>
          </DropdownMenuCheckboxItem>
          {viewType === "grid" && <DropdownMenuItem className="w-full p-[12px_8px_12px_12px]">
            <Slider min={90} max={270} value={[minColumnWidth]} onValueChange={(value) => setMinColumnWidth(value[0])} />
          </DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  )
}