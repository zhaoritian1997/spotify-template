import React from "react";
import { InsSvg, TwitterSvg, FaceBookSvg } from '@/components/svgComponents'
export default function MianViewFooter() {
  return <div className="pt-[40px] bg-[#121212] mx-[-40px]">
    <nav className="p-[8px_32px_40px_32px] w-full">
      <div className="flex justify-between">
        <div className="flex-[1 1 50%] flex flex-wrap">
          <div className="flex flex-col w-1/5 mr-[24px] mb-[32px]">
            <div className="text-[16px] text-white font-bold mb-[8px]">Company</div>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">About</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Jobs</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">For the Record</a>
          </div>
          <div className="flex flex-col w-1/5 mr-[24px] mb-[32px]">
            <div className="text-[16px] text-white font-bold mb-[8px] break-all">Communities</div>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">For Artists</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Developers</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Advertising</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Investors</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Vendors</a>
          </div>
          <div className="flex flex-col w-1/5 mr-[24px] mb-[32px]">
            <div className="text-[16px] text-white font-bold mb-[8px]">Useful links</div>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Support</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Free Mobile App</a>
          </div>
          <div className="flex flex-col w-1/5 mr-[24px] mb-[32px]">
            <div className="text-[16px] text-white font-bold mb-[8px]">Spotify Plans</div>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Premium Individual</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Premium Duo</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Premium Family</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Premium Student</a>
            <a className="text-[16px] text-[#b3b3b3] pb-[8px] cursor-pointer hover:text-[#fff] hover:underline">Spotify Free</a>
          </div>
        </div>
        <div className="flex flex-shrink-0 gap-[16px]">
          <a className="flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[#b3b3b3] bg-[#1f1f1f] hover:text-white hover/left:bg-[#2a2a2a]">
            <InsSvg className="w-[16px] h-[16px]" />
          </a>
          <a className="flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[#b3b3b3] bg-[#1f1f1f] hover:text-white hover/left:bg-[#2a2a2a]">
            <TwitterSvg className="w-[16px] h-[16px]" />
          </a>
          <a className="flex  justify-center items-center w-[40px] h-[40px] rounded-full text-[#b3b3b3] bg-[#1f1f1f] hover:text-white hover/left:bg-[#2a2a2a]">
            <FaceBookSvg className="w-[16px] h-[16px]" />
          </a>
        </div>
      </div>
      <hr className="border-white/10 mb-[24px]" />
      <div className="flex items-center justify-around flex-wrap gap-[12px]">
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrap flex-shrink-0">Legal</a>
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrap flex-shrink-0">Safety & Privacy Center</a>
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrap flex-shrink-0">Privacy Policy</a>
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrapflex-shrink-0">Cookies</a>
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrap flex-shrink-0">About Ads</a>
        <a className="text-[14px] text-[#b3b3b3] cursor-pointer hover:text-white whitespace-nowrap flex-shrink-0">Accessibility</a>
        <span className="text-[14px] text-[#b3b3b3] whitespace-nowrap flex-shrink-0">© 2025 Spotify AB</span>
      </div>
    </nav>
  </div>;

}


