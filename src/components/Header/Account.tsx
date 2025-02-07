import React from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { BellSvg, InstallSvg } from "../svgComponents";
export default function Account() {
  return (
    <div className="flex items-center gap-[8px] z-10">
      <Button className="h-[32px] bg-[#fff] text-[14px] font-semibold text-[#000] rounded-full hover:scale-105 hover:bg-[#f5f5f5] hover:text-[#000]  transition-all duration-300 hidden md:block"
        variant="outline" size="sm" title="Explore Premium">Explore Premium</Button>
      <Button className="h-[32px] text-[14px] font-semibold text-[#b3b3b3] rounded-full 
      hover:scale-105  hover:text-[#fff]  transition-all duration-300"
        variant="ghost" size="sm">
        <InstallSvg className="w-[24px] h-[24px] fill-current" />
        Install App
      </Button>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" className="mx-[8px] text-[#b3b3b3]  hover:text-[#fff]  transition-all duration-300">
            <BellSvg className="w-[24px] h-[24px] fill-current" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center" className="bg-[#1f1f1f] text-[#b3b3b3]" sideOffset={16}>
          <p>What&apos;s new</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" className="w-[48px] h-[48px] p-0 text-[#b3b3b3] bg-[#1f1f1f] rounded-full hover:scale-105 hover:bg-[#1f1f1f] hover:text-[#fff]  transition-all duration-300">
            <span className="leading-[32px] inline-block w-[32px] h-[32px] rounded-full text-[0.875rem] bg-[#ff6437] font-bold text-[#000]">U</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="center" className="bg-[#1f1f1f] text-[#b3b3b3]" sideOffset={16}>
          <p>Username</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}