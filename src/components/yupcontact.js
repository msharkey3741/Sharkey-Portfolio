import * as Yup from "yup";

const yup = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  firstName: Yup.string()
    .min(1)
    .required("First Name is required"),
  lastName: Yup.string()
    .min(1)
    .required("Last Name is required"),
  message: Yup.string()
    .min(5)
    .required("Message is required")
});
export default yup;
