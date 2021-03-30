import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as types from "../types";
import { registerAdmin } from "../actions/admin.action";
import { Form, Spinner } from "react-bootstrap";

const Signup = () => {
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const admin = useSelector((state) => state.signupAdminReducer);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(2, "Must be min 2 characters or greater")
        .required("Required"),
      cPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      dispatch(registerAdmin(values));
      setMsg(true);

      admin.isRegistered && router.push("/login");
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {msg && admin.isRegistered === false ? (
        <h1 className="text-danger">{admin.error}</h1>
      ) : null}
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error_message">{formik.errors.name}</div>
        ) : null}
      </Form.Group>
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
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error_message">{formik.errors.password}</div>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Form.Label>Confirm password</Form.Label>
        <Form.Control
          id="cPassword"
          name="cPassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cPassword}
        />
        {formik.touched.cPassword && formik.errors.cPassword ? (
          <div className="error_message">{formik.errors.cPassword}</div>
        ) : null}
      </Form.Group>

      <button
        type="submit"
        className="btn btn-primary float-right "
        disabled={formik.isSubmitting}
      >
        Signup
        {formik.isSubmitting && <Spinner animation="grow" size="sm" />}
      </button>
      <a
        onClick={() => {
          router.push("/login");
        }}
      >
        Already have an account. <span className="text-primary">Login</span>
      </a>
    </Form>
  );
};
export default Signup;
