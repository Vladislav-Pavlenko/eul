'use client';
import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import styles from './ContactsForm.module.css';

export default function ContactsForm() {
  const fieldId = {
    username: useId(),
    phone: useId(),
    email: useId(),
    route: useId(),
    message: useId(),
  };

  const handleSubmit = () => {};
  return (
    <section className={styles.contacts_form}>
      <div className={styles.form_container}>
        <svg className={styles.form_icon} width="24" height="24">
          <use href="/image/icons.svg#icon-arrow_circle_up"></use>
        </svg>

        <Formik
          initialValues={{
            username: '',
            phone: '',
            email: '',
            route: '',
            message: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <h3 className={styles.form_title}>Залишити заявку</h3>

              <label className={styles.form_label} htmlFor={fieldId.username}>
                <span className={styles.form_label_title}>Імʼя*</span>

                <Field
                  className={`${styles.label_field} ${
                    touched.username && errors.username
                      ? styles.field_error
                      : ''
                  }`}
                  type="text"
                  name="username"
                  placeholder="Ваше імʼя"
                  id={fieldId.username}
                />

                {touched.username && errors.username && (
                  <span className={styles.error_message}>
                    {errors.username}
                  </span>
                )}
              </label>

              <label className={styles.form_label} htmlFor={fieldId.phone}>
                <span className={styles.form_label_title}>Телефон*</span>

                <Field
                  className={`${styles.label_field} ${
                    touched.phone && errors.phone ? styles.field_error : ''
                  }`}
                  type="tel"
                  name="phone"
                  placeholder="+38 (097) 000 00 00"
                  id={fieldId.phone}
                />

                {touched.phone && errors.phone && (
                  <span className={styles.error_message}>{errors.phone}</span>
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
                  placeholder="example@gmail.com"
                  id={fieldId.email}
                />

                {touched.email && errors.email && (
                  <span className={styles.error_message}>{errors.email}</span>
                )}
              </label>

              <label className={styles.form_label} htmlFor={fieldId.route}>
                <span className={styles.form_label_title}>Маршрут*</span>

                <Field
                  className={`${styles.label_field} ${
                    touched.route && errors.route ? styles.field_error : ''
                  }`}
                  type="text"
                  name="route"
                  placeholder="Наприклад: Львів - Київ"
                  id={fieldId.route}
                />

                {touched.route && errors.route && (
                  <span className={styles.error_message}>{errors.route}</span>
                )}
              </label>

              <label className={styles.form_label} htmlFor={fieldId.message}>
                <span className={styles.form_label_title}>Опис вантажу*</span>

                <Field
                  className={`${styles.label_field_textarea} ${
                    touched.message && errors.message ? styles.field_error : ''
                  }`}
                  as="textarea"
                  name="message"
                  placeholder="Коротко опишіть вантаж, вагу, дату або особливі умови"
                  id={fieldId.message}
                />

                {touched.message && errors.message && (
                  <span className={styles.error_message}>{errors.message}</span>
                )}
              </label>

              <button className={styles.form_btn} type="submit">
                <span className={styles.form_btn_name}>Надіслати заявку</span>

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
