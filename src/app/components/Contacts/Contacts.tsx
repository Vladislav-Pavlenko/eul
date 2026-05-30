'use client';

import styles from './Contacts.module.css';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useId, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contacts() {
  const [openIndex, setOpenIndex] = useState(null);

  const phoneNumbers = [
    {
      name: 'Ігор',
      phonePretty: '+38 (096) 270 47 13',
      phone: 'tel:+380962704713',
      viber: 'viber://chat?number=%2B380962704713',
      whatsapp: 'https://wa.me/380962704713',
    },
    {
      name: 'Владислав',
      phonePretty: '+38 (091) 800 12 14',
      phone: 'tel:+380918001214',
      viber: 'viber://chat?number=%2B380918001214',
      telegram: 'https://t.me/vlad_logistic',
      whatsapp: 'https://wa.me/380976817855',
      email: 'mailto:vp632728@gmail.com',
    },
    {
      name: 'Світлана',
      phonePretty: '+38 (097) 924 77 63',
      phone: 'tel:+380979247763',
      viber: 'viber://chat?number=%2B380979247763',
    },
  ];

  const handleChange = (idx: any) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.main_container}>
        <p className={styles.tiny_text}>Звʼязок з нами</p>

        <h2 className={styles.title}>Обговоримо ваше перевезення</h2>

        <p className={styles.description}>
          Залиште заявку або звʼяжіться з нами напряму — уточнимо деталі
          вантажу, маршрут і строки, щоб підібрати оптимальне рішення для
          перевезення.
        </p>

        <hr className={styles.line} />

        <h3 className={styles.contacts_title}>Контактні особи</h3>

        <ul className={styles.list}>
          {phoneNumbers.map((phone, idx) => (
            <li key={idx} className={styles.list_item}>
              <button
                className={styles.phone_btn}
                type="button"
                onClick={() => handleChange(idx)}
              >
                <span className={styles.phone_name}>{phone.name}</span>
                <span className={styles.phone_number}>{phone.phonePretty}</span>
              </button>

              <ul
                className={`${styles.phone_list} ${
                  openIndex === idx ? styles.phone_list_open : ''
                }`}
              >
                {phone.phone && (
                  <li className={styles.phone_list_item}>
                    <Link className={styles.phone_list_link} href={phone.phone}>
                      <FaPhoneAlt size="16" />
                      <span>Телефон</span>
                    </Link>
                  </li>
                )}

                {phone.viber && (
                  <li className={styles.phone_list_item}>
                    <Link className={styles.phone_list_link} href={phone.viber}>
                      <FaViber size="16" />
                      <span>Viber</span>
                    </Link>
                  </li>
                )}

                {phone.telegram && (
                  <li className={styles.phone_list_item}>
                    <Link
                      className={styles.phone_list_link}
                      href={phone.telegram}
                      target="_blank"
                    >
                      <FaTelegram size="16" />
                      <span>Telegram</span>
                    </Link>
                  </li>
                )}

                {phone.whatsapp && (
                  <li className={styles.phone_list_item}>
                    <Link
                      className={styles.phone_list_link}
                      href={phone.whatsapp}
                      target="_blank"
                    >
                      <FaWhatsapp size="16" />
                      <span>WhatsApp</span>
                    </Link>
                  </li>
                )}

                {phone.email && (
                  <li className={styles.phone_list_item}>
                    <Link className={styles.phone_list_link} href={phone.email}>
                      <MdEmail size="16" />
                      <span>Email</span>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className={styles.platforms_title}>Ми на платформах</h3>

        <ul className={styles.platforms_list}>
          <li className={styles.platforms_item}>
            <Link
              className={styles.platforms_link}
              href="https://della.com.ua/company/fe8f4a1c93df2e0d57ba75aa80549979452b2efee70dd2bba2b37ddea1a298c0ebc4266f76dff8c795867b90360226e7b77d3e2a0fd7953cbbece8ad29e39441/"
              target="_blank"
              rel="noreferrer"
            >
              Della
            </Link>
          </li>

          <li className={styles.platforms_item}>
            <a
              className={styles.platforms_link}
              href="https://lardi-trans.com/log/user/19104678912/"
              target="_blank"
              rel="noreferrer"
            >
              Lardi-Trans
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.map_box}>
        <div className={styles.map_header}>
          <h3 className={styles.map_title}>Наша адреса</h3>
          <p className={styles.map_text}>
            Зборів, Тернопільська область, Україна
          </p>
        </div>

        <iframe
          className={styles.map_iframe}
          src="https://www.openstreetmap.org/export/embed.html?bbox=25.1100%2C49.6500%2C25.1700%2C49.6900&layer=mapnik&marker=49.6650%2C25.1400"
          title="Наша адреса на карті"
          loading="lazy"
        />
      </div>
    </section>
  );
}
