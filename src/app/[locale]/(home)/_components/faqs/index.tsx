import { useTranslations } from "next-intl"


export const HomeFaqs = () =>{
  const translate = useTranslations("homepage.faqs")
  const yvdTranslate = useTranslations("homepage.faqs.youtube-video-downloader")

  return (
    <div className="bg-white mb-20 rounded-3xl py-7 lg:py-20 px-4 lg:px-24 shadow-md">
      <div className="font-light text-[15px] leading-normal text-gray-600 mb-4">
        <p className="mb-1">{ translate("intro.0") }</p>
        <p className="mb-1">{ translate("intro.1") }</p>
        <p className="">{ translate("intro.2") }</p>
      </div>
      <h2 className="font-bold text-heading_main">{ yvdTranslate("heading") }</h2>
      <div className="font-light text-[15px] leading-normal text-gray-600 mb-6">
        <p className="mb-1">{ yvdTranslate("intro.0") }</p>
        <p className="mb-1">{ yvdTranslate("intro.1") }</p>
        <p className="mb-1">{ yvdTranslate("intro.2") }</p>
        <p className="mb-1">{ yvdTranslate("intro.3") }</p>
      </div>

      <h3 className="font-bold text-heading_main text-xl mb-6">{yvdTranslate("word")}: { translate("word") }</h3>
      <div className="mb-6">
        <h3 className="font-bold text-heading_main">{ yvdTranslate("list.0.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600 mb-4">{ yvdTranslate("list.0.answer") }</p>
        <h3 className="font-bold text-heading_main">{ yvdTranslate("list.1.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600 mb-4">{ yvdTranslate("list.1.answer") }</p>
        <h3 className="font-bold text-heading_main">{ yvdTranslate("list.2.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600">{ yvdTranslate("list.2.answer") }</p>
      </div>

      <h3 className="font-bold text-heading_main text-xl mb-6">{yvdTranslate("branding.title")}</h3>
      <div className="font-light text-[15px] leading-normal text-gray-600 mb-6">
        <p className="mb-1">{ yvdTranslate("branding.intro.0") }</p>
        <p className="mb-1">{ yvdTranslate("branding.intro.1") }</p>
        <p className="mb-1">{ yvdTranslate("branding.intro.2") }</p>
        <p className="mb-1">{ yvdTranslate("branding.intro.3") }</p>
        <p className="mb-1">{ yvdTranslate("branding.intro.4") }</p>
        <p className="mb-1">{ yvdTranslate("branding.intro.5") }</p>
      </div>

      <div className="font-light text-[15px] leading-normal text-gray-600 mb-6">
        <ul className="list-disc pl-4">
          <li className="mb-1">{ yvdTranslate("branding.list.0") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.1") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.2") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.3") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.4") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.5") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.6") }</li>
          <li className="mb-1">{ yvdTranslate("branding.list.5") }</li>
        </ul>
      </div>

      <h3 className="font-bold text-heading_main text-xl mb-6">{yvdTranslate("branding.subtitle")}</h3>
      <div>
        <h3 className="font-bold text-heading_main">{ yvdTranslate("branding.questions.0.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600 mb-4">{ yvdTranslate("branding.questions.0.answer") }</p>
        <h3 className="font-bold text-heading_main">{ yvdTranslate("branding.questions.1.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600 mb-4">{ yvdTranslate("branding.questions.1.answer") }</p>
        <h3 className="font-bold text-heading_main">{ yvdTranslate("branding.questions.2.question") }</h3>
        <p className="font-light text-[15px] leading-normal text-gray-600">{ yvdTranslate("branding.questions.2.answer") }</p>
      </div>
    </div>
  )
}