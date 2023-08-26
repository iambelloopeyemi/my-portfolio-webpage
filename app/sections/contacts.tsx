"use client";
import Underline from "../components/underline";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { validationSchema } from "../utils/validation";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <section id="contact" className="bg-anti-flash-white px-4 py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h1 className="text-2xl sm:text-4xl font-bold uppercase">contact</h1>
        <Underline />
        <p className="sm:text-xl font-medium text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <Form className="w-2/3 bg-white p-4 sm:p-8 rounded drop-shadow mb-16">
            <div className="block mb-5">
              <label className="block text-sm lg:text-base font-medium mb-2">
                Name
              </label>
              <div className="bg-seasalt p-3 lg:p-5 rounded">
                <Field
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Enter Your Full Name"
                  className="block bg-seasalt w-full h-4 sm:h-6 rounded outline-0 text-sm sm:text-base sm:font-medium"
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="block mb-5">
              <label className="block text-sm lg:text-base font-semibold mb-2">
                Email
              </label>
              <div className="bg-seasalt p-3 lg:p-5 rounded">
                <Field
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  className="block bg-seasalt w-full h-4 sm:h-6 rounded outline-0 text-sm sm:text-base sm:font-medium"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="block mb-5">
              <label className="block text-sm lg:text-base font-semibold mb-2">
                Message
              </label>
              <div className="bg-seasalt p-3 lg:p-5 rounded">
                <Field
                  name="message"
                  as="textarea"
                  autoComplete="off"
                  placeholder="Enter Your Message"
                  className="block bg-seasalt w-full h-28 lg:h-32 rounded outline-0 text-sm sm:text-base sm:font-medium"
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
                className="bg-violet-blue px-6 sm:px-12 py-2 sm:py-3 rounded hover:scale-105 text-white uppercase font-semibold sm:font-bold"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </Formik>
      <ToastContainer />
    </section>
  );
}
