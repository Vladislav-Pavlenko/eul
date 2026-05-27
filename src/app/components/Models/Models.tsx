'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Models.module.css';

export default function Models() {
  return (
    <section className={styles.models}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Comprehensive Trucking & Freight Solutions
        </h2>

        <ul className={styles.list}>
          <li className={styles.list_item}>
            <button
              className={`models-prev ${styles.list_item_btn}`}
              type="button"
            >
              <svg className={styles.list_item_icon} width="24" height="24">
                <use href="/image/icons.svg#icon-arrow_back" />
              </svg>
            </button>
          </li>

          <li className={styles.list_item}>
            <button
              className={`models-next ${styles.list_item_btn}`}
              type="button"
            >
              <svg className={styles.list_item_icon} width="24" height="24">
                <use href="/image/icons.svg#icon-arrow_next" />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesOffsetBefore={100}
        slidesPerView={3}
        navigation={{
          prevEl: '.models-prev',
          nextEl: '.models-next',
          disabledClass: styles.disabledBtn,
        }}
      >
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.top}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Paris,France</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ftl.jpg"
            alt="Full Truckload Load (FTL)"
            width={370}
            height={230}
          />
          <p className={styles.description}>Full Truckload Load (FTL)</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Paris,France</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ltl.jpg"
            alt="Less Than Truckload (LTL)"
            width={370}
            height={303}
          />
          <p className={styles.description}>Less Than Truckload (LTL)</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.top}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Paris,France</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ref.jpg"
            alt="Temperature-Controlled"
            width={370}
            height={230}
          />
          <p className={styles.description}>Temperature-Controlled</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Paris,France</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ref.jpg"
            alt="Temperature-Controlled"
            width={370}
            height={230}
          />
          <p className={styles.description}>Temperature-Controlled</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
