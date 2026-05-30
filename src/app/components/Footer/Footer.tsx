'use client';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { handleScroll } from '@/components/Header/Header';
import ScrollTopBtn from '@/components/ScrollTopBtn/ScrollTopBtn';

export default function Footer() {
  const emailId = useId();
  const handleSubmit = () => {};
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.main_container}>
          <Link href="/">
            <Image
              className={styles.image}
              src="/image/mini-logo.png"
              alt="ТОВ Дім Дороша"
              width="52"
              height="52"
            ></Image>
          </Link>
          <h2 className={styles.title}>ТОВ «Дім Дороша»</h2>
          <p className={styles.description}>
            Організовуємо вантажні перевезення під задачі вашого бізнесу:
            підбираємо транспорт, координуємо перевізників, супроводжуємо
            доставку та контролюємо кожен етап маршруту.
          </p>
        </div>
        <div className={styles.form_container}>
          <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <label className={styles.form_label} htmlFor={emailId}>
                  <span className={styles.field_name}>
                    Підписка на оновлення
                  </span>
                  <Field
                    className={styles.field}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    id={emailId}
                  />
                  {touched.email && errors.email && (
                    <span className={styles.error_message}>{errors.email}</span>
                  )}
                </label>
                <button className={styles.button} type="button">
                  Підписатися
                </button>
              </Form>
            )}
          </Formik>
          <p className={styles.form_description}>
            Отримуйте корисні оновлення про логістику, перевезення та роботу
            компанії.
          </p>
        </div>
      </div>

      <div className={styles.credits}>
        <ul className={styles.credits_list}>
          <li className={styles.credits_list_item}>
            <p className={styles.credits_list_copyright}>
              &copy; 2026 ТОВ «Дім Дороша». Усі права захищено.
            </p>
          </li>
          <li className={styles.credits_list_item}>
            <Link className={styles.credits_list_link} href="">
              Політика конфіденційності
            </Link>
          </li>
          <li className={styles.credits_list_item}>
            <Link className={styles.credits_list_link} href="">
              Умови використання
            </Link>
          </li>
        </ul>
        <p className={styles.credits_figma}>
          Design based on a Figma Community template by{' '}
          <Link
            className={styles.credits_link}
            href="https://www.figma.com/@duozhuamiao"
          >
            @duozhuamiao
          </Link>
          , modified by Vladyslav Pavlenko.
        </p>
      </div>
      <ScrollTopBtn />
    </footer>
  );
}
