import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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

        <label htmlFor="email">Email:</label>
        <Field className={css.input} type="email" id="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="div" />

        <label htmlFor="password">Password:</label>
        <Field
          className={css.input}
          type="password"
          id="password"
          name="password"
        />
        <ErrorMessage className={css.error} name="password" component="div" />

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
