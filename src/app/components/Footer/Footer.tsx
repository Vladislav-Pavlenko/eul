'use client';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const emailId = useId();
  const handleSubmit = () => {};
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.main_container}>
          <div className={styles.icon_circle}>
            <svg className={styles.icon} width="32" height="32">
              <use href="/image/icons.svg#icon-boat_railway"></use>
            </svg>
          </div>
          <h2 className={styles.title}>Keep up with the latest</h2>
          <p className={styles.description}>
            Fast.reable,and cost-effectie logistics solutions tailored to your
            business-from local delveries to global freight forwarding
          </p>
        </div>
        <div className={styles.form_container}>
          <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form className={styles.form}>
                <label className={styles.form_label} htmlFor={emailId}>
                  <span className={styles.field_name}>Email</span>
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
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <p className={styles.form_description}>more description here</p>
        </div>
      </div>
      <p className={styles.credits}>
        Design based on a Figma Community template by{' '}
        <Link
          className={styles.credits_link}
          href="https://www.figma.com/@duozhuamiao"
        >
          @duozhuamiao
        </Link>
        , modified by Vladyslav Pavlenko.
      </p>
    </footer>
  );
}
