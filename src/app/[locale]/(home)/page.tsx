import { HomeDownload } from './_components/download';
import { HomeFaqs } from './_components/faqs';
import { HomeFeatures } from './_components/features';
import { HomeHero } from './_components/hero';
import { HomePartners } from './_components/partners';
 
export default function HomePage() {

  return (
    <main className='px-5 lg:px-0'>
      <HomeHero />
      <HomeDownload />
      <HomePartners />
      <HomeFaqs />
      <HomeFeatures />
    </main>
  );
}