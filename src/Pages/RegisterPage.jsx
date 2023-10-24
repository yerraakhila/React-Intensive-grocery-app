import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function RegisterPage() {
  //   const [user, setUser] = useState({
  //     firstName: "",
  //     email: "",
  //     mobile: "",
  //     password: "",
  //   });
  //   function handleChange(e){
  //     const {name,value}  = e.target.value;
  //     setUser({...user,[name]:value})
  //   }
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [responseRequest, setResponseRequest] = useState({
    textMessage: "",
    alertClass: "",
  });
  function onSubmit(values) {
    axios
      .post(
        "https://orca-app-jhg4l.ondigitalocean.app/api/auth/register",
        values
      )
      .then(
        (response) => {
          setResponseRequest({
            textMessage: response.data.message,
            alertClass: "alert alert-success",
          });
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
  //   function validate(values){
  //     let errors ={}
  //     if(!values.firstName){
  //         errors.firstName = "first name is required"
  //     }
  //     if(!values.email){
  //         errors.email = "email is required"
  //     }
  //     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  //         errors.email = "Invalid email address"
  //     }
  //     if(!values.mobile){
  //         errors.mobile = "mobile is required"
  //     }
  //     if(!values.password){
  //         errors.password = "password is required"
  //     }
  //     return errors;
  //   }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    mobile: Yup.string().required("mobile number is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should have minimum 6 charcters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    //   validate,
    validationSchema,
    validateOnMount: true,
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
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName &&
                  (formik.errors.firstName ? (
                    <small className="text-danger">
                      {formik.errors.firstName}
                    </small>
                  ) : null)}
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
                {formik.touched.email &&
                  (formik.errors.email ? (
                    <small className="text-danger">{formik.errors.email}</small>
                  ) : null)}
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
                {formik.touched.mobile &&
                  (formik.errors.mobile ? (
                    <small className="text-danger">
                      {formik.errors.mobile}
                    </small>
                  ) : null)}
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
                {formik.touched.password &&
                  (formik.errors.password ? (
                    <small className="text-danger">
                      {formik.errors.password}
                    </small>
                  ) : null)}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already reigistered? <Link to="/login">Click Here </Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
export default RegisterPage;
