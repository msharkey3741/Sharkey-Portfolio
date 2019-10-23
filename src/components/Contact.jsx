import React from "react";
import { Formik } from "formik";
import yup from "./yupcontact";

class Contact extends React.Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            company: "",
            message: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={yup}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  type="firstName"
                  placeholder="Enter your First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.firstName && touched.firstName && "error"}
                />
                {errors.firstName && touched.firstName && (
                  <div className="input-feedback">{errors.firstName}</div>
                )}
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  type="lastName"
                  placeholder="Enter your Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName && touched.lastName && "error"}
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
                <label htmlFor="message">Message</label>
                <textarea
                  rows="4"
                  cols="69"
                  name="message"
                  type="message"
                  placeholder="Message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && touched.message && "error"}
                />
                {errors.message && touched.message && (
                  <div className="input-feedback">{errors.message}</div>
                )}

                <button type="submit" disabled={isSubmitting}>
                  Contact
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
export default Contact;
