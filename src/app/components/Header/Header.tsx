'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ModalMenu from '@/components/ModalMenu/ModalMenu';
import { useState } from 'react';

const navItems = [
  { label: 'Про нас', href: '#about' },
  { label: 'Послуги', href: '#services' },
  { label: 'Контакти', href: '#contacts' },
  { label: 'Відгуки', href: '#reviews' },
];

export const handleScroll = (event: any, href: any) => {
  event.preventDefault();

  const id = href.replace('#', '');
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  window.history.pushState(null, '', href);
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo_link} href="/">
          <Image
            className={styles.logo}
            src="/image/mini-logo.png"
            alt="Логотип ТОВ «Дім Дороша»"
            width={32}
            height={32}
          />

          <span className={styles.logo_title}>ТОВ «Дім Дороша»</span>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {navItems.map((item) => (
              <li className={styles.nav_list_item} key={item.href}>
                <Link
                  className={styles.nav_list_link}
                  href={item.href}
                  onClick={(event) => handleScroll(event, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.search_container}>
            <button className={styles.search_btn} type="button">
              <svg className={styles.search_btn_icon} width="18" height="18">
                <use href="/image/icons.svg#icon-document_search" />
              </svg>
            </button>

            <input
              className={styles.search_input}
              type="text"
              placeholder="Пошук"
            />
          </div>

          <button className={styles.menu_btn} type="button" onClick={openMenu}>
            <svg className={styles.menu_icon} width="18" height="18">
              <use href="/image/icons.svg#icon-menu" />
            </svg>
          </button>
        </nav>
      </header>
      <div
        className={`${styles.modal_menu} ${
          isOpen ? styles.modal_menu_open : ''
        }`}
        onClick={closeMenu}
      >
        <ModalMenu
          navItems={navItems}
          onClose={closeMenu}
          handleScroll={handleScroll}
        />
      </div>
    </>
  );
}
