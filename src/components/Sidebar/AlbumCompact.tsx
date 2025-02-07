import React, { useContext } from "react";
import { AlbumInfo } from "@/types";
import { usePlayingProvider } from "@/hooks/usePlayProvider";
import { PinSvg, VolumeFillSvg } from "@/components/svgComponents";
import { SidebarContext } from "./index";
import clsx from "clsx";
interface AlbumCompactProps {
  list: AlbumInfo[]
}

export default function AlbumCompact({ list }: AlbumCompactProps) {
  const { isPlaying, playingSongInfo, playingAlbumInfo, setPlayingAlbumInfo } = usePlayingProvider();
  const { isExpanded } = useContext(SidebarContext);
  const matchAlbum = (data: AlbumInfo, albumId: number) => {
    return data.id === albumId
  }
  return <div className="flex flex-col w-full h-0 px-[8px] rounded-[8px]">
    {list.map((item) => (
      <div key={item.id} className={clsx("w-full h-[32px] p-[4px_8px] hover:bg-[#282828] rounded-[4px] cursor-pointer",
        isExpanded && "grid grid-cols-[1fr_20%_20%] gap-[24px] items-center", matchAlbum(playingAlbumInfo, item.id) && "bg-[#282828]")}
        style={{ gridTemplateAreas: isExpanded ? `"listRow addedAt lastPlayedAt"` : `unset` }}
        onClick={() => setPlayingAlbumInfo(item)}>
        <div className="flex items-center justify-start gap-[4px] w-full" style={{ gridArea: `"1 / listRow / 1 / lastPlayedAt;"` }}>
          {item.isPinned &&
            <div className="text-[#1ed760]">
              <PinSvg className="w-[12px] h-[12px]" />
            </div>}
          <div className="flex items-center gap-[4px]">
            <p className={clsx("text-[16px]", matchAlbum(item, playingSongInfo?.albumId) ? "text-[#1ed760]" : "text-[#fff]")}>{item.name}</p>
            {item.type && <>
              <p className="text-[#b3b3b3]">•</p>
              <p className="text-[14px] text-[#b3b3b3] font-normal">{item.type}</p>
            </>
            }
          </div>
          {isPlaying && matchAlbum(item, playingSongInfo?.albumId) && <span className="text-[#1ed760] ml-auto px-[8px]"><VolumeFillSvg className="w-[12px] h-[12px]" /></span>}
        </div>
        {isExpanded && <>
          <span style={{ gridArea: "addedAt" }} className="text-[12px] text-[#b3b3b3]">2 days ago</span>
          <span style={{ gridArea: "lastPlayedAt" }} className="text-right text-[12px] text-[#b3b3b3]">2 days ago</span>
        </>}
      </div>
    ))}
  </div>;
}


