'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './About.module.css';
import { handleScroll } from '@/components/Header/Header';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.main_container}>
        <p className={styles.tiny_text}>Про компанію</p>
        <h2 className={styles.title}>
          Організовуємо перевезення від заявки до доставки
        </h2>
        <p className={styles.description}>
          Ми допомагаємо бізнесу знаходити надійні рішення для перевезення
          вантажів: підбираємо транспорт, координуємо перевізників,
          супроводжуємо документи та контролюємо доставку на кожному етапі.
        </p>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Підбір перевізника</h3>
            <p className={styles.list_item_description}>
              Знаходимо транспорт під ваш вантаж, маршрут і строки доставки.
              Працюємо з перевізниками, які відповідають вимогам конкретного
              перевезення.
            </p>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Супровід доставки</h3>
            <p className={styles.list_item_description}>
              Координуємо процес перевезення, контролюємо статус вантажу та
              підтримуємо звʼязок із клієнтом на кожному етапі маршруту.
            </p>
          </li>
        </ul>
        <Link
          href=""
          onClick={(e) => handleScroll(e, '#contacts_form')}
          className={styles.button}
        >
          <span className={styles.button_name}>Звʼязатися</span>
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
          src="/image/about-content.jpg"
          alt="truck"
          width="410"
          height="472"
          loading="eager"
        ></Image>
        <p className={styles.location}>
          <span className={styles.location_name}>
            Baden-Württemberg, Germany
          </span>
        </p>
      </div>
    </section>
  );
}
