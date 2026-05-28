import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Models from '@/components/Models/Models';
import Mission from '@/components/Mission/Mission';
import Careers from '@/components/Careers/Careers';
import Board from '@/components/Board/Board';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Models />
      <Mission />
      <Careers />
      <Board />
    </main>
  );
}
