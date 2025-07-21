import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
 
export default function HomePage() {

  return (
    <div>
      <Navbar />
      <Hero/>
    </div>
  );
}