import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be less than 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name:</label>
        <Field className={css.input} type="text" id="name" name="name" />
        <ErrorMessage className={css.error} name="name" component="div" />

        <label htmlFor="number">Number:</label>
        <Field className={css.input} type="text" id="number" name="number" />
        <ErrorMessage className={css.error} name="number" component="div" />

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
