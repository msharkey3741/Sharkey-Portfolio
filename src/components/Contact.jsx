import React from "react";
// import { Formik } from "formik";
// import yup from "./yupcontact";
import "../css/background.css";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="container  contactForm">
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        <hr />
        <form action="https://formspree.io/meqjkjdz" method="POST">
          <Row>
            <Col>
              <label htmlFor="_replyto" />
              Your Email:
              <input
                type="text"
                name="_replyto"
                required
                id="input-email"
                className="form-control"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="firstName" />
              First Name:
              <input
                type="text"
                name="firstName"
                id="input-name"
                className="form-control"
                required
              />
            </Col>
            <Col>
              <label htmlFor="lastName" />
              Last Name:
              <input
                type="text"
                name="lastName"
                id="input-name"
                className="form-control"
                required
              />
            </Col>
          </Row>
          <label htmlFor="Company" />
          Your Company Name:
          <input
            type="text"
            name="Company"
            id="input-name"
            className="form-control"
          />
          <label htmlFor="message" />
          Your message:
          <textarea
            name="message"
            required
            rows="4"
            cols="66"
            className="form-control"
          />
          <br />
          <Row>
            <NavLink to="/">
              <button type="button" className="submitbtn">
                Home
              </button>
            </NavLink>
            <Col>
              <button type="submit" className="submitbtn">
                Send
              </button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
export default Contact;
