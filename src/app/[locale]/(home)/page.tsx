import { HomeDownload } from './_components/download';
import { HomeHero } from './_components/hero';
 
export default function HomePage() {

  return (
    <main className='px-5'>
      <HomeHero />
      <HomeDownload />
    </main>
  );
}