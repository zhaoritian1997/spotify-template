"use client"
import React, { useState } from "react";
import HomeSvg from "../svgComponents/HomeSvg";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SearchSvg, StoreSvg, CloseSvg, HomeOutlineSvg } from "../svgComponents";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  }
  const isHomePage = pathname === "/";
  return (
    <div className="absolute left-0 right-0 flex-1  flex items-center justify-center gap-0 w-full ml-[72px] sm:justify-start sm:ml-[72px] xl:justify-center xl:ml-[0]">
      <div className="max-w-[546px] min-w-[350px] w-1/2 flex items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <button className={clsx("ml-[8px] flex items-center justify-center rounded-full bg-[#1f1f1f] flex-shrink-0 p-[12px] hover:scale-105 transition-all duration-300", isHomePage ? "text-white" : 'text-[#b3b3b3]')} onClick={handleHomeClick}>
              {isHomePage ? <HomeSvg className="w-[24px] h-[24px] fill-current" /> : <HomeOutlineSvg className="w-[24px] h-[24px] fill-current" />}
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center" className="bg-[#1f1f1f] text-[#b3b3b3]">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <div className='w-full group px-[8px]'>
          <div className="text-[#b3b3b3] relative h-[48px]">
            <div className="flex items-center gap-2 absolute top-1/2 left-0 -translate-y-1/2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex items-center justify-center text-[#b3b3b3] group-hover:text-[#fff] transition-all duration-300">
                    <SearchSvg className="w-[48px] h-[48px] px-[12px] fill-current" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" className={clsx("bg-[#1f1f1f]", search ? "text-white" : "text-[#b3b3b3]")}>
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input type="text" placeholder="What do you want to play?" className={clsx("w-full h-[48px] p-[12px_64px_12px_48px] bg-[#1f1f1f] text-[16px] group-hover:bg-[#2a2a2a] transition-all duration-300 rounded-full border-[2px] border-[transparent] focus:border-white", search && "text-white")} value={search} onChange={(e) => setSearch(e.target.value)} />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center">
              {search ?
                <div className="absolute top-1/2 right-[16px] -translate-y-1/2">
                  <div className="h-[24px] pr-[4px]">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="flex items-center justify-center text-[#b3b3b3] group-hover:text-[#fff] transition-all duration-300"
                          onClick={() => setSearch("")} >
                          <CloseSvg className="w-[24px] h-[24px] fill-current" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="center" className="bg-[#1f1f1f] text-[#b3b3b3]" sideOffset={16}>
                        <p>Clear search field</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                : <div className="absolute top-1/2 right-[16px] -translate-y-1/2">
                  <div className="border-l-[0.5px] p-[0_4px_0_12px] border-[#b3b3b3] h-[24px]">
                    <Tooltip>
                      <TooltipTrigger asChild>

                        <button className="flex items-center justify-center text-[#b3b3b3] hover:text-[#fff] hover:scale-105 transition-all duration-300">
                          <StoreSvg className="w-[24px] h-[24px] fill-current" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" align="center" className="bg-[#1f1f1f] text-[#b3b3b3]" sideOffset={16}>
                        <p>Browse</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}