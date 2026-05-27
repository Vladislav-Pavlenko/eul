import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo_link} href="/">
        <svg className={styles.logo_icon} width="24" height="24">
          <use href="/image/icons.svg#icon-delivery_truck"></use>
        </svg>
        <span className={styles.logo_title}>Duozhuamiao</span>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Models
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Our Mission
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              Careers
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link className={styles.nav_list_link} href="#">
              About us
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
            placeholder="Search"
          />
        </div>
        <button className={styles.menu_btn}>
          <svg className={styles.menu_icon} width="18" height="18">
            <use href="/image/icons.svg#icon-menu"></use>
          </svg>
        </button>
      </nav>
    </header>
  );
}
