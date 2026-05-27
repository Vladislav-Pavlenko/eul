import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Models from '@/components/Models/Models';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Models />
    </main>
  );
}
