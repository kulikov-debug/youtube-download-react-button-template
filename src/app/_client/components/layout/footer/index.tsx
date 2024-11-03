import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"


const links = [
  {
    label: "Youtube Video Downloader",
    link: "/"
  },
  {
    label: "4k Video Downloader",
    link: "/4k-video-downloader"
  },
  {
    label: "Youtube to MP3",
    link: "/youtube-to-mp3"
  },
  {
    label: "Youtube Playlist Downloader",
    link: "/youtube-playlist-downloader"
  },
  {
    label: "Youtube to WAV",
    link: "/youtube-to-wav"
  },
  {
    label: "Youtube 1080p Downloader",
    link: "/youtube-1080p-downloader"
  }
]

export const Footer = () =>{
  const translate = useTranslations("footer")

  const renderLinks = () =>{
    const mappedLinks = links.map(link => (
      <li
        key={ link.link }
        className="text-[15px] font-light mb-8">
        <Link href={link.link}>
          { link.label }
        </Link>
      </li>
    ))

    return mappedLinks
  }

  return (
    <footer className="bg-white px-5 pt-20 pb-8 lg:flex lg:items-start lg:gap-x-10">
      <div className="pb-8 border-b-2 border-b-gray-200 mb-8 lg:border-none">
        <Link
          className="block max-w-max mx-auto text-violet-600 font-bold text-[42px] lg:leading-normal" 
          href="/">
          VDA
        </Link>
      </div>
      <div className="text-center lg:text-left">
        <h3 className="text-xl font-bold text-heading_main mb-4">{ translate("more_links") }</h3>
        <ul className="text-gray-500 lg:grid lg:grid-cols-2 lg:gap-x-6">
          { renderLinks() }
          <li
            className="text-[15px] font-light mb-8">
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}