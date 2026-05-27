import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.main_container}>
        <h1 className={styles.title}>
          Fast & Sustainable Road Freight Solutions
        </h1>
        <p className={styles.description}>
          Exptess pollet camo snipping with same-day ornext-daydelivery. on as
          little as anehour snouce.Reat-time tracking.Optmised routes Thobest
          customeroxoononce
        </p>
        <Link href="#" className={styles.button}>
          <span className={styles.button_name}>Join our team</span>
          <svg className={styles.button_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </Link>
        <div className={styles.card}>
          <div className={styles.card_container}>
            <h3 className={styles.card_title}>
              <span className={styles.bold}>01</span>/01
            </h3>
            <p className={styles.card_description}>
              Exptess pollet camo snipping with same-day ornext-daydelivery. on
              as little as anehour snouce.Reat-time tracking.Optmised routes
              Thobest customeroxoononce
            </p>
          </div>
          <Image
            className={styles.card_image}
            src="/image/hero-content.jpg"
            alt="road"
            width="170"
            height="96"
          ></Image>
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.item_front}>
          <Image
            className={styles.list_item_avatar}
            src="/image/hero-card-avatar-1.jpg"
            alt="avatar"
            width="40"
            height="40"
          ></Image>
          <p className={styles.list_item_title}>
            Delivery Revolution <span>11:00</span>
          </p>
          <p className={styles.list_item_description}>
            meta description <span>05/2019</span>
          </p>
          <Image
            className={styles.list_item_image}
            src="/image/hero-card.jpg"
            alt="avatar"
            width="230"
            height="88"
          ></Image>
        </li>
        <li className={styles.item_middle}>
          <Image
            className={styles.list_item_avatar}
            src="/image/hero-card-avatar-2.jpg"
            alt="avatar"
            width="40"
            height="40"
          ></Image>
        </li>
        <li className={styles.item_back}>
          <Image
            className={styles.list_item_avatar}
            src="/image/hero-card-avatar-3.jpg"
            alt="avatar"
            width="40"
            height="40"
          ></Image>
        </li>
      </ul>
    </section>
  );
}
