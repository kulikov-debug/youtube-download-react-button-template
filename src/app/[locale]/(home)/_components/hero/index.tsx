import { useTranslations } from "next-intl"


export const HomeHero = () =>{
  const translate = useTranslations("homepage.hero")

  return (
    <div className="pt-24 pb-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[51px] lg:text-[64px] font-black text-[#2D3436] leading-tight mb-4">YouTube Video Downloader</h1>
        <p className="font-light text-xs text-gray-700 lg:text-base">{ translate("description") }</p>
      </div>
    </div>
  )
}