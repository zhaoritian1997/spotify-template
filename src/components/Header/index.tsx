import React from "react";
import LogoSvg from "@/components/svgComponents/LogoSvg";
import Account from "@/components/Header/Account";
import SearchBar from "@/components/Header/SearchBar";
export default function Header() {
  return (
    <header className="flex justify-between items-center h-[48px] relative" style={{ gridArea: "global-nav" }}>
      <a className="m-[20px] flex items-center justify-center text-white cursor-pointer z-[1] cursor-pointer">
        <LogoSvg className="w-[32px] h-[32px]" />
      </a>
      <SearchBar />
      <Account />
    </header>
  )
}