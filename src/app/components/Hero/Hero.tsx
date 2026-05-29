import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.main_container}>
        <h1 className={styles.title}>Вантажні перевезення без зайвих турбот</h1>
        <p className={styles.description}>
          Організовуємо перевезення вантажів під ваші задачі: підбираємо
          транспорт, координуємо перевізників, супроводжуємо доставку та
          контролюємо кожен етап маршруту.
        </p>
        <Link href="#" className={styles.button}>
          <span className={styles.button_name}>Залишити заявку</span>
          <svg className={styles.button_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </Link>
      </div>
    </section>
  );
}
