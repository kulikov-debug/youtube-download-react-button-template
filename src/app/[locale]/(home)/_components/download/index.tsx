"use client"
import { DownloadIcon } from "@/app/_client/components/svgs/icons/download"
import { QualitySelectionIcon } from "@/app/_client/components/svgs/icons/qualitySelect"
import { useExpansion } from "@/app/_client/libs/hooks/useExpansion"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { audios, videos } from "./data"


type Selection = {
  label: string
  value: string
}

export const HomeDownload = () =>{
  const translate = useTranslations("general")
  const { isExpanded, handleExpansion } = useExpansion()
  const [ selectedFormat, setSelectedFormat ] = useState({
    label: "MP4 (720p)",
    value: "mp4_720"
  })

  const handleChangeFormat = (newFormat: Selection) => () =>{
    setSelectedFormat(newFormat)
    handleExpansion()
  }

  const renderSelections = (selections: Selection[]) =>{
    const mappedSelections = selections.map(selection => (
      <button
        className={`block font-light text-xs mb-3 text-gray-500 ${ selection.value===selectedFormat.value && "text-purple_main font-semibold" }`}
        key={selection.value}
        onClick={ handleChangeFormat(selection) }>
        { selection.label }
      </button>
    ))

    return mappedSelections
  }

  return (
    <div className="lg:flex lg:bg-white lg:items-center lg:shadow-md lg:rounded-3xl lg:py-4 lg:pr-4 mb-20">
      <div className="mb-4 lg:mb-0 lg:w-full">
        <input
          className="font-light px-6 h-16 rounded-3xl bg-white shadow-md lg:shadow-none w-full block outline-none"
          placeholder="Paste your url" />
      </div>
      <div className="relative flex items-center rounded-3xl before:absolute lg:min-w-[306px] lg:max-w-[306px]
        before:w-[1px] before:h-[70%] before:bg-gray-300 before:top-3 before:left-1/2 before:bg-opacity-60">
        <button 
          className="text-white font-bold bg-purple_main basis-1/2 flex justify-center items-center h-16 rounded-l-2xl gap-x-2 hover:bg-opacity-80"
          onClick={ handleExpansion }
          aria-expanded={ isExpanded }>
          {selectedFormat.label}
          <div className={`w-6 h-6 transition-transform ${ isExpanded && "rotate-180" }`}>
            <QualitySelectionIcon />
          </div>
        </button>
        <button 
          className="text-white font-bold bg-purple_main basis-1/2 flex justify-center items-center h-16 rounded-r-2xl gap-x-2 hover:bg-opacity-80">
          <div className="w-6 h-7">
            <DownloadIcon />
          </div>
          { translate("download") }
        </button>
        <div className={`transition-all absolute top-full left-0 bg-white rounded-lg shadow p-6 flex items-start gap-x-10 opacity-0 invisible ${ isExpanded && "!opacity-100 !visible" }`}>
          <div>
            <h4 className="text-sm font-bold text-heading_main mb-4">{ translate("audio") }</h4>
            <div>
              { renderSelections(audios) }
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-heading_main mb-4">{ translate("video") }</h4>
            <div>
              { renderSelections(videos) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}