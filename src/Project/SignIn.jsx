import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

const SignIn = () => {
    const formik = useFormik({
        initialValues: { firstName: "", lastName: "", email: "", password: "" },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(8, "Password should be at least 8 characters long").required("Password is required")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const getPasswordStrength = (password) => {
        if (password.length === 0) {
            return "";
        } else if (password.length <= 6) {
            return "Weak";
        } else if (password.length <= 10) {
            return "Medium";
        } else {
            return "Strong";
        }
    };

    return (
        <div>
            <img src="/image/Sigin.png" id="banner-Sign" />
            <div className="FormS">
                <form className="LoginS" onSubmit={formik.handleSubmit}>
                    <div className="mb-3" id="FirstName">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input type="text" className="form-control" id="firstNameS" {...formik.getFieldProps("firstName")} />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="form-text error">{formik.errors.firstName}</div>
                        )}
                    </div>
                    <div className="mb-3" id="LastName">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input type="text" className="form-control" id="lastNameS" {...formik.getFieldProps("lastName")} />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="form-text error">{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div className="mb-3" id="Email">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input type="email" className="form-control" id="emailS" {...formik.getFieldProps("email")} />
                        {formik.touched.email && formik.errors.email && (
                            <div className="form-text error">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="mb-3" id="Pass">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="passwordS" {...formik.getFieldProps("password")} />
                        {formik.touched.password && formik.errors.password && (
                            <div className="form-text error">{formik.errors.password}</div>
                        )}
                        <div className="form-text password-strength">
                            Password Strength: {getPasswordStrength(formik.values.password)}
                        </div>
                    </div>
                    <div className="mb-3 form-check" id="logfoot">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Remember me
                        </label>
                        <NavLink to="/forgotpass" id="fp1S">
                            Forgot Password?
                        </NavLink>
                    </div>
                    <button type="submit" className="button2S">
                        Create New Account
                    </button>
                    <p id="p">Already have an account?</p>
                    <div id="log2">
                        <div className="container">
                            <NavLink to="/login" id="fp2S">
                                Log In
                            </NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
