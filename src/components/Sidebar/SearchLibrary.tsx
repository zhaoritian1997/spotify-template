import { useState, useRef } from "react";
import clsx from "clsx";
import { SearchSvg } from "../svgComponents";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useClickAway } from "ahooks";
export default function SearchLibrary() {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(() => { setIsExpanded(false); }, ref);
  return <div ref={ref} className={clsx("flex flex-col gap-[8px]")}>
    <div className="relative">
      <div className="flex items-center gap-[4px] min-w-0 me-[auto]">
        <Input className={clsx("rounded-[6px] border-none h-[32px] flex items-center text-[#fff] text-opacity-70 bg-[#fff] bg-opacity-10  hover:text-opacity-100 transition-all duration-300 focus:outline-none focus:border-none", isExpanded ? "w-auto p-[8px_8px_8px_32px] opacity-100" : "w-[32px] opacity-0 p-[8px]")} placeholder="Search Your Library" />
        <div className="absolute left-[8px] top-1/2 -translate-y-1/2">
          <SearchSvg className="w-[16px] h-[16px]" />
        </div>
        <Button className={clsx("absolute right-0 rounded-full top-1/2 -translate-y-1/2 p-[8px] h-[32px] flex items-center text-[#1f1f1f] text-opacity-30 hover:text-[#fff] hover:bg-[#fff] hover:bg-opacity-10", isExpanded ? "opacity-0" : "opacity-100")}
          onClick={() => setIsExpanded(!isExpanded)}        >
          <SearchSvg className="w-[16px] h-[16px]" />
        </Button>
      </div>
    </div>
  </div>;
}