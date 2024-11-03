"use client"
import { DownloadIcon } from "@/app/_client/components/svgs/icons/download"
import { QualitySelectionIcon } from "@/app/_client/components/svgs/icons/qualitySelect"
import { useTranslations } from "next-intl"
import { useState } from "react"


export const HomeDownload = () =>{
  const [] = useState()
  const translate = useTranslations("general")

  return (
    <div className="lg:flex lg:bg-white lg:items-center lg:shadow-md lg:rounded-2xl lg:py-4 lg:pr-4">
      <div className="mb-4 lg:mb-0 lg:w-full">
        <input
          className="font-light px-6 h-16 rounded-xl bg-white shadow-md lg:shadow-none w-full block outline-none"
          placeholder="Paste your url" />
      </div>
      <div className="relative flex items-center rounded-xl before:absolute lg:min-w-[306px] lg:max-w-[306px]
        before:w-[1px] before:h-[70%] before:bg-gray-300 before:top-3 before:left-1/2 before:bg-opacity-60">
        <button className="text-white font-bold bg-[#6c5ce7] basis-1/2 flex justify-center items-center h-16 rounded-l-2xl gap-x-2 hover:bg-opacity-80">
          MP4 (720p)
          <div className="w-6 h-6">
            <QualitySelectionIcon />
          </div>
        </button>
        <button 
          className="text-white font-bold bg-[#6c5ce7] basis-1/2 flex justify-center items-center h-16 rounded-r-2xl gap-x-2 hover:bg-opacity-80">
          <div className="w-6 h-7">
            <DownloadIcon />
          </div>
          { translate("download") }
        </button>
      </div>
    </div>
  )
}