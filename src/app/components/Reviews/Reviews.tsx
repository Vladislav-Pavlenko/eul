import Link from 'next/link';
import Image from 'next/image';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.main_container}>
        <div className={styles.title_container}>
          <h2 className={styles.title}>Відгуки наших клієнтів</h2>
          <p className={styles.description}>
            Досвід клієнтів, для яких ми організовували перевезення, супровід
            вантажів і логістичні рішення.
          </p>
        </div>
        <Link
          className={styles.link}
          href="https://lardi-trans.com/log/user/19104678912/responses/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.link_name}>Всі відгуки</span>
          <svg className={styles.link_icon} width="16" height="16">
            <use href="/image/icons.svg#icon-arrow_circle_up"></use>
          </svg>
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <p className={styles.list_item_description}>
            Fast.reable,and cost-effectie logistics solutions tailored to your
            business-from local delveries to global freight forwarding
          </p>
          <div className={styles.item_container}>
            <Image
              className={styles.item_container_image}
              src="/image/hero-card-avatar-1.jpg"
              alt="customer"
              width="28"
              height="28"
            ></Image>
            <div className={styles.item_user_container}>
              <h5 className={styles.item_user_container_name}>Floyd Miles</h5>
              <ul className={styles.item_user_list}>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_description}>
            Fast.reable,and cost-effectie logistics solutions tailored to your
            business-from local delveries to global freight forwarding
          </p>
          <div className={styles.item_container}>
            <Image
              className={styles.item_container_image}
              src="/image/hero-card-avatar-2.jpg"
              alt="customer"
              width="28"
              height="28"
            ></Image>
            <div className={styles.item_user_container}>
              <h5>Savannah Nguyen</h5>
              <ul className={styles.item_user_list}>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_description}>
            Fast.reable,and cost-effectie logistics solutions tailored to your
            business-from local delveries to global freight forwarding
          </p>
          <div className={styles.item_container}>
            <Image
              className={styles.item_container_image}
              src="/image/hero-card-avatar-3.jpg"
              alt="customer"
              width="28"
              height="28"
            ></Image>
            <div className={styles.item_user_container}>
              <h5 className={styles.item_user_container_name}>
                Cameron Williamson
              </h5>
              <ul className={styles.item_user_list}>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.list_item}>
          <p className={styles.list_item_description}>
            Fast.reable,and cost-effectie logistics solutions tailored to your
            business-from local delveries to global freight forwarding
          </p>
          <div className={styles.item_container}>
            <Image
              className={styles.item_container_image}
              src="/image/hero-card-avatar-3.jpg"
              alt="customer"
              width="28"
              height="28"
            ></Image>
            <div className={styles.item_user_container}>
              <h5 className={styles.item_user_container_name}>
                Cameron Williamson
              </h5>
              <ul className={styles.item_user_list}>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
                <li className={styles.item_user_list_item}>
                  <svg
                    className={styles.item_user_list_icon}
                    width="13"
                    height="13"
                  >
                    <use href="/image/icons.svg#icon-kid_star"></use>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
