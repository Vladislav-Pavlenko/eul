import Image from 'next/image';
import styles from './Board.module.css';

export default function Board() {
  return (
    <section className={styles.board}>
      <Image
        className={styles.image}
        src="/image/about-content.jpg"
        alt="truck on road"
        width="1000"
        height="400"
      ></Image>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={styles.list_item_name}>Drawing</p>
          <svg className={styles.list_item_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_name}>Chat</p>
          <svg className={styles.list_item_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_name}>Cooking</p>
          <svg className={styles.list_item_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_name}>Games</p>
          <svg className={styles.list_item_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </li>
      </ul>
      <div className={styles.primary_circle}>
        <button className={styles.primary_button} type="button">
          Primary Action
        </button>
      </div>
    </section>
  );
}
