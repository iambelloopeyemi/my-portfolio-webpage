import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your Full Name is required"),
  email: Yup.string().email("Invalid email").required("Your Email is required"),
  phone: Yup.string().required("Your Phone Number is required"),
  message: Yup.string().required("Your Message is required"),
});
