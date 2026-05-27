import Link from 'next/link';
import Image from 'next/image';
import styles from './Careers.module.css';

export default function Careers() {
  return (
    <section className={styles.careers}>
      <div className={styles.main_container}>
        <p className={styles.tiny_text}>tiny text here</p>
        <h2 className={styles.title}>How We Move Your Goods. Step by Step</h2>
        <p className={styles.description}>
          Fast.reable,and cost-effectie logistics solutions tailored to your
          business-from local delveries to global freight forwarding
        </p>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Section title</h3>
            <p className={styles.list_item_description}>
              Fast.reable,and cost-effectie logistics solutions tailored to your
              business-from local delveries to global freight forwarding
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Section title</h3>
            <p className={styles.list_item_description}>
              Fast.reable,and cost-effectie logistics solutions tailored to your
              business-from local delveries to global freight forwarding
            </p>
          </li>
        </ul>
        <Link href="#" className={styles.button}>
          <span className={styles.button_name}>Join our team</span>
          <svg className={styles.button_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </Link>
      </div>
      <div className={styles.image_container}>
        <svg className={styles.image_icon} width="24" height="24">
          <use href="/image/icons.svg#icon-arrow_circle_up"></use>
        </svg>
        <Image
          className={styles.image}
          src="/image/about.jpg"
          alt="truck"
          width="410"
          height="472"
        ></Image>
        <p className={styles.location}>
          <span className={styles.location_name}>Paris,France</span>
        </p>
      </div>
    </section>
  );
}
