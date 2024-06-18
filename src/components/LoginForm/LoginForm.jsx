import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
