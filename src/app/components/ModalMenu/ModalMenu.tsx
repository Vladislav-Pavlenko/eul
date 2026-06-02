import styles from './ModalMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = {
  label: string;
  href: string;
};

type ModalMenuProps = {
  navItems: NavItem[];
  onClose: () => void;
  handleScroll: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => void;
};

export default function ModalMenu({
  navItems,
  onClose,
  handleScroll,
}: ModalMenuProps) {
  return (
    <div className={styles.menu} onClick={(event) => event.stopPropagation()}>
      <div className={styles.menu_header}>
        <Link className={styles.logo_link} href="/" onClick={onClose}>
          <Image
            className={styles.logo}
            src="/image/mini-logo.png"
            alt="Логотип ТОВ «Дім Дороша»"
            width={32}
            height={32}
          />

          <span className={styles.logo_title}>ТОВ «Дім Дороша»</span>
        </Link>

        <button
          className={styles.close_btn}
          type="button"
          onClick={onClose}
          aria-label="Закрити меню"
        >
          ×
        </button>
      </div>

      <nav className={styles.mobile_nav}>
        <ul className={styles.mobile_nav_list}>
          {navItems.map((item) => (
            <li className={styles.mobile_nav_item} key={item.href}>
              <Link
                className={styles.mobile_nav_link}
                href={item.href}
                onClick={(event) => {
                  handleScroll(event, item.href);
                  onClose();
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.search_container}>
        <svg className={styles.search_icon} width="18" height="18">
          <use href="/image/icons.svg#icon-document_search" />
        </svg>

        <input
          className={styles.search_input}
          type="text"
          placeholder="Пошук"
        />
      </div>
    </div>
  );
}
