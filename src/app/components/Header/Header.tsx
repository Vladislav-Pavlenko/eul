import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo_link} href="/">
        <Image
          className={styles.logo}
          src="/image/mini-logo.png"
          alt="logo"
          width="32"
          height="32"
        />
        <span className={styles.logo_title}>ТОВ "Дім Дороша"</span>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Про нас
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Послуги
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#contacts">
              Контакти
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Карʼєра
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Відгуки
            </Link>
          </li>
        </ul>
        <div className={styles.search_container}>
          <button className={styles.search_btn} type="button">
            <svg className={styles.search_btn_icon} width="18" height="18">
              <use href="/image/icons.svg#icon-document_search"></use>
            </svg>
          </button>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Пошук"
          />
        </div>
        {/*<button className={styles.menu_btn}>*/}
        {/*  <svg className={styles.menu_icon} width="18" height="18">*/}
        {/*    <use href="/image/icons.svg#icon-menu"></use>*/}
        {/*  </svg>*/}
        {/*</button>*/}
      </nav>
    </header>
  );
}
