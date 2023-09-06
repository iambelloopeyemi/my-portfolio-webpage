"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "../utils/validation";

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const handleSubmit = async (
    values: ContactFormValues,
    formikHelpers: FormikHelpers<ContactFormValues>
  ) => {
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
      };
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }
      toast.success("Email sent successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      formikHelpers.resetForm();
    } catch (error) {
      console.error("Failed to send email.", error);
      toast.error("Failed to send email.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="flex justify-center px-6 mb-6">
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full sm:w-2/3 lg:w-1/2">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <div className="bg-seasalt p-2 rounded">
              <Field
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Enter Your Full Name"
                className="block bg-seasalt w-full h-6 rounded outline-0 text-sm text-dim-gray"
              />
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="bg-seasalt p-2 rounded">
              <Field
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Enter Your Email"
                className="block bg-seasalt w-full h-6 rounded outline-0 text-sm text-dim-gray"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <div className="bg-seasalt p-2 rounded">
              <Field
                name="message"
                as="textarea"
                autoComplete="off"
                placeholder="Enter Your Message"
                className="block bg-seasalt w-full h-28 rounded outline-0 text-sm text-dim-gray"
              />
            </div>
            <ErrorMessage
              name="message"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-violet-blue px-4 py-2 rounded hover:scale-105 text-white uppercase font-medium"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
