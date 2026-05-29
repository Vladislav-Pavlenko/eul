'use client';

import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.models}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Експедиторські рішення для вантажних перевезень
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
        className={styles.swiper}
        modules={[Navigation, Mousewheel, FreeMode]}
        spaceBetween={20}
        slidesOffsetBefore={100}
        slidesPerView={3}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: false,
        }}
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
            <span className={styles.location_name}>Central Brazil</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ftl.jpg"
            alt="Організація FTL-перевезень"
            width={370}
            height={240}
          />
          <p className={styles.description}>Організація FTL-перевезень</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Istanbul, Turkey</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ltl.jpg"
            alt="Збірні вантажі та LTL"
            width={370}
            height={240}
          />
          <p className={styles.description}>Збірні вантажі та LTL</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.top}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Seaford, USA</span>
          </p>
          <Image
            className={styles.image}
            src="/image/ref.jpg"
            alt="Температурні перевезення"
            width={370}
            height={240}
          />
          <p className={styles.description}>Температурні перевезення</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>
              Port Terminal, Colombia
            </span>
          </p>
          <Image
            className={styles.image}
            src="/image/container.jpg"
            alt="Міжнародна логістика"
            width={370}
            height={240}
          />
          <p className={styles.description}>Міжнародна логістика</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.top}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>San Pedro, USA</span>
          </p>
          <Image
            className={styles.image}
            src="/image/expedition.jpg"
            alt="Експедиторський супровід"
            width={370}
            height={240}
          />
          <p className={styles.description}>Експедиторський супровід</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Office</span>
          </p>
          <Image
            className={styles.image}
            src="/image/office.jpg"
            alt="Підбір перевізника"
            width={370}
            height={240}
          />
          <p className={styles.description}>Підбір перевізника</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.top}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Documents</span>
          </p>
          <Image
            className={styles.image}
            src="/image/documents.jpg"
            alt="Документальний супровід"
            width={370}
            height={240}
          />
          <p className={styles.description}>Документальний супровід</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <p className={`${styles.location} ${styles.bottom}`}>
            <svg className={styles.location_icon} width="16" height="16">
              <use href="/image/icons.svg#icon-corporate_fare"></use>
            </svg>
            <span className={styles.location_name}>Southwest USA</span>
          </p>
          <Image
            className={styles.image}
            src="/image/tracking.jpg"
            alt="Контроль доставки"
            width={370}
            height={240}
          />
          <p className={styles.description}>Контроль доставки</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
