import styles from './ScrollTopBtn.module.css';
import { useEffect, useState } from 'react';

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');

      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const currentScroll = window.scrollY;

      setIsVisible(currentScroll >= aboutTop - 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', '/');
  };
  return (
    <button
      className={`${styles.scrollTopBtn} ${
        isVisible ? styles.scrollTopBtnVisible : ''
      }`}
      type="button"
      onClick={scrollToTop}
      aria-label="Повернутися нагору"
    >
      <svg className={styles.scroll_icon} width="28" height="28">
        <use href="/image/icons.svg#icon-arrow_next" />
      </svg>
    </button>
  );
}
