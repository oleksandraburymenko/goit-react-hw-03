import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Max 50 chars!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Max 50 chars!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const contactId = nanoid();

  const handleSabmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSabmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={contactId}>Name</label>
          <Field className={css.input} id={contactId} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.group}>
          <label>Number</label>
          <Field className={css.input} name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}