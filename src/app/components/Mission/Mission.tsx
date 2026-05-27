import styles from './Mission.module.css';
import Image from 'next/image';

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <h2 className={styles.title}>Delivering Excellence in Every Mile</h2>
        <p className={styles.description}>
          Fast.reable,and cost-effectie logistics solutions tailored to your
          business-from local delveries to global freight forwarding
        </p>
      </div>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Image
            className={styles.list_item_image}
            src="/image/delivery-1.jpg"
            alt="truck on road"
            width="480"
            height="300"
          ></Image>
          <h3 className={styles.list_item_title}>Erd-to-EndLocal MadeEnty</h3>
          <p className={styles.location_1}>
            <span className={styles.location_name}>Paris,France</span>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-arrow_circle_up"></use>
            </svg>
          </p>
        </li>
        <li className={styles.list_item}>
          <svg className={styles.list_item_icon} width="24" height="24">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
          <Image
            className={styles.list_item_image}
            src="/image/delivery-2.jpg"
            alt="truck on parking"
            width="240"
            height="300"
          ></Image>
          <p className={styles.location_2}>
            <span className={styles.location_name}>Paris,France</span>
          </p>
        </li>
        <li className={styles.list_item}>
          <svg className={styles.list_item_icon} width="24" height="24">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
          <Image
            className={styles.list_item_image}
            src="/image/delivery-3.jpg"
            alt="truck on road"
            width="240"
            height="300"
          ></Image>
        </li>
      </ul>
    </section>
  );
}
