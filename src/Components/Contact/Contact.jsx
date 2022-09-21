import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeContext } from "../../Context";
function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlegxd4",
        "template_ufz3mo7",
        form.current,
        "sQUqFVdsLqEoadHlh"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success(" İşlem Başarılı.​👍​");
        },
        (error) => {
          console.log(error.text);
          toast.error(" Üzgünüm gönderilemedi ​");
        }
      );
    e.current.value({});
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <Formik
          initialValues={{
            user_name: "",
            user_email: "",
            user: "",
          }}
          validationSchema={Yup.object({
            user_name: Yup.string("lütfen geçerli isim girin").required(
              "Lütfen bu alanı doldurun"
            ),
            user_email: Yup.string()
              .email("Geçerli bir Mail adresi giriniz")
              .required("Lütfen bu alanı doldurun"),
            user: Yup.string()
              .min(5, "mesajınız en az 5 karaketrli olmak zornadadır.")
              .max(400, "mesajınız en fazla 500 karakterli olmak zorundadır.")
              .required("Lütfen bu alanı doldurun"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            handleReset,
            dirty,
            isSubmitting,
            errors,
            touched,
            handleBlur,
          }) => (
            <form ref={form} onSubmit={sendEmail}>
              <input
                style={{ textTransform: "capitalize " }}
                type="text"
                name="user_name"
                onChange={handleChange}
                value={values.user_name}
                className="user "
                placeholder="Name"
                onBlur={handleBlur}
                required
              />
              {errors.user_name && touched.user_name && (
                <div
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "var(--orange) " : "",
                  }}
                  className="error"
                >
                  {errors.user_name}
                </div>
              )}
              <input
                type="email"
                name="user_email"
                onChange={handleChange}
                value={values.user_email}
                className="user"
                placeholder="Email"
                onBlur={handleBlur}
                required
              />
              {errors.user_email && touched.user_email && (
                <div
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "var(--orange)" : "",
                  }}
                  className="error"
                >
                  {errors.user_email}
                </div>
              )}
              <textarea
                type="mesage"
                name="user"
                onChange={handleChange}
                value={values.user}
                className="user"
                placeholder="Message"
                onBlur={handleBlur}
                required
              />
              {errors.user && touched.user && (
                <div
                  style={{
                    background: darkMode ? "black" : "",
                    color: darkMode ? "var(--orange) " : "",
                  }}
                  className="error"
                >
                  {errors.user}
                </div>
              )}
              <button
                type="submit"
                onChange={handleChange}
                disabled={!dirty}
                className=" button "
              >
                gönder
              </button>
              <ToastContainer />
              <span>{done && "Mesajınız başarıya gönderildi"}</span>
              <div
                className="blur c-blur"
                style={{ background: "var(--purple" }}
              ></div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
