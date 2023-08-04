import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values); // Perform your login logic here
    },
  });

  return (
    <div>
      <img src="/image/Login.png" id="banner-Sign" />
      <div className="Form">
        <form className="Login" onSubmit={formik.handleSubmit}>
          <div className="mb-3" id="Email">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="form-text error">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3" id="Pass">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="form-text error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit" className="button1">
            Login
          </button>
          <div className="mb-3 form-check" id="logfoot">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
            <NavLink to="/forgotpass" id="fp1">
              Forgot Password?
            </NavLink>
          </div>
          <button type="submit" className="button2">
            <NavLink to="/signin" id="log">
              Create New Account
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
