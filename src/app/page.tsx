import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import Board from '@/components/Board/Board';
import Contacts from '@/components/Contacts/Contacts';
import Reviews from '@/components/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Board />
      <Contacts />
      <Reviews />
      <Footer />
    </main>
  );
}
