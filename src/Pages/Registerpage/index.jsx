import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./Style.css";

const Registerpage = () => {
  const [requestresponse, setrequestresponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    firstname: "",
    email: "",
    mobile: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          setrequestresponse({
            textMessage: response.data.message,
            alertClass: "alert alert-success",
          });
        },
        (error) => {
          setrequestresponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    email: Yup.string()
      .required("email name is required")
      .email("email should valid email"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={requestresponse.alertClass}>
              {requestresponse.textMessage}
            </div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Firstname</label>
                <input
                  type="text"
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <span className="text-danger">{formik.errors.firstname}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Mobile</label>
                <input
                  type="text"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <span className="text-danger">{formik.errors.mobile}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <input
                style={{ width: "100%", marginTop: "20px" }}
                className="btn btn-primary btn-block"
                type="submit"
                value="Register"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Register? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default Registerpage;
