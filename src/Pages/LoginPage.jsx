import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

function LoginPage() {
  let navigate = useNavigate();
  const initialValues = {
    email: "", 
    password: "",
  };
  const [responseRequest, setResponseRequest] = useState({
    textMessage: "",
    alertClass: "",
  });
  function onSubmit(values) {
    axios
      .post("https://orca-app-jhg4l.ondigitalocean.app/api/auth/login", values)
      .then(
        (response) => {
          setResponseRequest({
            textMessage: "Login is sucessful",
            alertClass: "alert alert-success",
          });
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('user',JSON.stringify(response.data.user));
          navigate("/") 
        },
        (error) => {
          setResponseRequest({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should have minimum 6 charcters"),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div class={responseRequest.alertClass} role="alert">
              {responseRequest.textMessage}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <small className="text-danger">
                        <ErrorMessage name="email" />
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <small className="text-danger">
                        <ErrorMessage name="password" />
                      </small>
                    </div>
                    <Field
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              New User?<Link to="/register">Click Here </Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
