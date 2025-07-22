import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
 
export default function HomePage() {

  return (
    <div>
      <Navbar />
      <Hero/>
      <Gallery/>
    </div>
  );
}