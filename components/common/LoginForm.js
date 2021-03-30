import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Form, Spinner } from "react-bootstrap";

import { loginAdmin } from "../actions/admin.action";

const Login = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const admin = useSelector((state) => state.loginAdminReducer);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      dispatch(loginAdmin(values));
      setMsg(true);
      setSubmitting(false);
      admin.isLogedin && router.push("/add-article");
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {msg && admin.isLogedin === false ? (
        <h1 className="text-danger">{admin.error}</h1>
      ) : null}

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error_message">{formik.errors.email}</div>
        ) : null}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          className=""
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error_message">{formik.errors.password}</div>
        ) : null}
      </Form.Group>

      <button
        type="submit"
        className="btn btn-primary float-right"
        disabled={formik.isSubmitting}
      >
        Login
        {formik.isSubmitting && (
          <Spinner animation="grow" variant="light" size="sm" />
        )}
      </button>
      <a
        href="#"
        className="text-dark"
        onClick={() => {
          router.push("/signup");
        }}
      >
        Don't have an account. <span className="text-primary">Signup</span>
      </a>
    </Form>
  );
};
export default Login;
