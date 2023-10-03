import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate()
  const [requestresponse, setrequestresponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/login",
        values
      )
      .then(
        (response) => {
          console.log(response.data)
          setrequestresponse({
            textMessage: "login successfull Thankyou",
            alertClass: "alert alert-success",
          });
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("user",JSON.stringify(response.data.user))
          navigate('/')
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
  const ValidationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "should 6 char long"),
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="wrapper" style={{ backgroundColor: "wheat" }}>
            <div className={requestresponse.alertClass}>
              {requestresponse.textMessage}
            </div>
              <h2>login</h2>
              <hr />
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={ValidationSchema}
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="email">email</label>
                        <Field
                          type="text"
                          name="email"
                          className={
                            formik.touched.email && formik.errors.email
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                        {/* <input type="text" /> */}
                        <ErrorMessage name="email">
                          {(errorMessage) => (
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">password</label>
                        <Field
                          type="text"
                          name="password"
                          id="password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "is-invalid form-control"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="password">
                          {(errorMessage) => (
                            <small className="text-danger">
                              {errorMessage}
                            </small>
                          )}
                        </ErrorMessage>
                      </div>
                      <button
                        className="btn btn-primary btn-block"
                        style={{ width: "450px", marginTop: "30px" }}
                      >
                        Submit
                      </button>
                      <p className="text-center">
                        new user? <Link to="/Register">Register</Link>
                      </p>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
