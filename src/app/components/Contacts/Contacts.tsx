'use client';
import styles from './Contacts.module.css';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

export default function Contacts() {
  const fieldId = {
    username: useId(),
    email: useId(),
  };

  const handleSubmit = () => {};
  return (
    <section className={styles.contacts}>
      <div className={styles.main_container}>
        <p className={styles.tiny_text}>tiny text here</p>
        <h2 className={styles.title}>How We Move Your Goods. Step by Step</h2>
        <p className={styles.description}>
          Fast.reable,and cost-effectie logistics solutions tailored to your
          business-from local delveries to global freight forwarding
        </p>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Section title</h3>
            <p className={styles.list_item_description}>
              Fast.reable,and cost-effectie logistics solutions tailored to your
              business-from local delveries to global freight forwarding
            </p>
            <ul className={styles.decor_list}>
              <li className={styles.decor_list_item}>
                <p className={styles.decor_list_item_name}>Cooking</p>
                <svg
                  className={styles.decor_list_item_icon}
                  width="16"
                  height="16"
                >
                  <use href="/image/icons.svg#icon-arrow_circle_up"></use>
                </svg>
              </li>
              <li className={styles.decor_list_item}>
                <p className={styles.decor_list_item_name}>Games</p>
                <svg
                  className={styles.decor_list_item_icon}
                  width="16"
                  height="16"
                >
                  <use href="/image/icons.svg#icon-arrow_circle_up"></use>
                </svg>
              </li>
            </ul>
          </li>
          <li className={styles.list_item}>
            <div className={styles.list_item_circle}>
              <svg className={styles.list_item_icon} width="32" height="32">
                <use href="/image/icons.svg#icon-boat_railway"></use>
              </svg>
            </div>
            <h3 className={styles.list_item_title}>Section title</h3>
            <p className={styles.list_item_description}>
              Fast.reable,and cost-effectie logistics solutions tailored to your
              business-from local delveries to global freight forwarding
            </p>
            <ul className={styles.decor_list}>
              <li className={styles.decor_list_item}>
                <p className={styles.decor_list_item_name}>Drawing</p>
                <svg
                  className={styles.decor_list_item_icon}
                  width="16"
                  height="16"
                >
                  <use href="/image/icons.svg#icon-arrow_circle_up"></use>
                </svg>
              </li>
              <li className={styles.decor_list_item}>
                <p className={styles.decor_list_item_name}>Chat</p>
                <svg
                  className={styles.decor_list_item_icon}
                  width="16"
                  height="16"
                >
                  <use href="/image/icons.svg#icon-arrow_circle_up"></use>
                </svg>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.form_container}>
        <svg className={styles.form_icon} width="24" height="24">
          <use href="/image/icons.svg#icon-arrow_circle_up"></use>
        </svg>
        <Formik
          initialValues={{ username: '', email: '' }}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h3 className={styles.form_title}>Contact us</h3>
              <label className={styles.form_label} htmlFor={fieldId.username}>
                <span className={styles.form_label_title}>Username</span>
                <Field
                  className={`${styles.label_field} ${
                    touched.username && errors.username
                      ? styles.field_error
                      : ''
                  }`}
                  type="text"
                  name="username"
                  placeholder="Username"
                  id={fieldId.username}
                />
                {touched.username && errors.username && (
                  <span className={styles.error_message}>
                    {errors.username}
                  </span>
                )}
              </label>
              <label className={styles.form_label} htmlFor={fieldId.email}>
                <span className={styles.form_label_title}>Email</span>
                <Field
                  className={`${styles.label_field} ${
                    touched.email && errors.email ? styles.field_error : ''
                  }`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  id={fieldId.email}
                />
                {touched.email && errors.email && (
                  <span className={styles.error_message}>{errors.email}</span>
                )}
              </label>
              <button className={styles.form_btn}>
                <span className={styles.form_btn_name}>Submit</span>
                <svg className={styles.form_btn_icon} width="16" height="16">
                  <use href="/image/icons.svg#icon-arrow_circle_up"></use>
                </svg>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
