import Image from 'next/image';
import Link from 'next/link';
import styles from './Board.module.css';

export default function Board() {
  return (
    <section className={styles.board}>
      <div className={styles.banner}>
        <Image
          className={styles.image}
          src="/image/board.jpg"
          alt="truck on road"
          width="1000"
          height="400"
        ></Image>
        <h3 className={styles.title}>Потрібно організувати перевезення?</h3>
        <p className={styles.description}>
          Допоможемо підібрати транспорт, узгодити маршрут і проконтролювати
          доставку вантажу.
        </p>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <p className={styles.list_item_name}>Повне авто</p>
            <svg className={styles.list_item_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-arrow_circle_up"></use>
            </svg>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_item_name}>Збірні вантажі</p>
            <svg className={styles.list_item_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-arrow_circle_up"></use>
            </svg>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_item_name}>Температурні</p>
            <svg className={styles.list_item_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-arrow_circle_up"></use>
            </svg>
          </li>
          <li className={styles.list_item}>
            <p className={styles.list_item_name}>Міжнародні</p>
            <svg className={styles.list_item_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-arrow_circle_up"></use>
            </svg>
          </li>
        </ul>
        <div className={styles.primary_circle}>
          <Link
            href="#contacts_form"
            className={styles.primary_button}
            type="button"
          >
            Залишити заявку
          </Link>
        </div>
      </div>
    </section>
  );
}
