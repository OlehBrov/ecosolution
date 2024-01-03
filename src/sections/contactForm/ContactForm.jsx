import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { BtnArrow } from "../../components/BtnArrow";
import { TextPlugin } from "gsap/TextPlugin";
import { breakpoints } from "../../utils/mediaConstants";

gsap.registerPlugin(TextPlugin);
export const ContactForm = (currentScreen) => {
  const submitBtn = useRef(null);
  const [btnSize, setBtnSize] = useState("0px");
  useEffect(() => {
    if (currentScreen === breakpoints.wDesktop) {
      setBtnSize("580px");
    } else {
      setBtnSize("294px");
    }
  }, [currentScreen]);

  const submitBtnTl = gsap.timeline({
    paused: true,
    duration: 1,
    ease: "none",
  });

  submitBtn.current &&
    submitBtnTl
      .to(".submit-btn", {
        width: btnSize,
      })
      .to(".submit-btn", { background: "#97D28B" }, "<")
      .to(".submit-btn-txt", { text: "SUBMITTED" })
      .to(".submit-btn", { width: "100px" }, "+=1")
      .to(".submit-btn-txt", { text: "Send" }, "<")
      .to(".submit-btn", { background: "none" });

  const hoverTl = gsap.timeline({
    paused: true,
    duration: 1,
    ease: "none",
    delay: 0,
  });
  submitBtn.current &&
    hoverTl
      .set(".submit-btn", {
        backgroundImage: "linear-gradient(90deg, #dcefd8 50%, transparent 51%)",
        backgroundSize: "100px 100px",
        backgroundPosition: "-50px -50px",
        backgroundRepeat: "no-repeat",
      })
      .to(".submit-btn", {
        backgroundSize: "200% 200%",
        backgroundPosition: "0px 0px",
      });

  const submittedDataHandler = (data) => {
    localStorage.setItem("ecosolutionContactForm", JSON.stringify(data));

    submitBtnTl.play();
    submitBtnTl.restart();
  };

  const onHover = () => {
    hoverTl.play();
  };
  const offHover = () => {
    hoverTl.reverse();
  };
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number().integer().required("Reqired"),
    message: Yup.string(),
  });
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      validateOnBlur
      onSubmit={(values, actions) => {
        submittedDataHandler(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched, blur, values }) => (
        <Form className="contact-form">
          <div className="input-field-wrap">
            <label htmlFor="fullName" className="input-label">
              Full Name:
            </label>
            <Field
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="John Rosie"
            />
            {errors.fullName && touched.fullName && values.fullName !== "" ? (
              <div className="error-msg">{errors.fullName}</div>
            ) : null}
          </div>
          <div className="input-field-wrap">
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="johnrosie@gmail.com"
            />
            {errors.email && touched.email && values.email !== "" ? (
              <div className="error-msg">{errors.email}</div>
            ) : null}
          </div>
          <div className="input-field-wrap">
            <label htmlFor="phone" className="input-label">
              Phone:
            </label>
            <Field
              id="phone"
              name="phone"
              type="phone"
              label="Phone"
              placeholder="380961234567"
            />
            {errors.phone && touched.phone && values.phone !== "" ? (
              <div className="error-msg">{errors.phone}</div>
            ) : null}
          </div>
          <div className="input-field-wrap">
            <label htmlFor="message" className="input-label">
              Message:
            </label>
            <Field
              id="message"
              name="message"
              type="textarea"
              component="textarea"
              label="Message"
              className="text-area"
              placeholder="Your message"
            />
            {errors.message && touched.message ? (
              <div className="error-msg">{errors.message}</div>
            ) : null}
          </div>

          <button
            ref={submitBtn}
            type="submit"
            className="submit-btn"
            onMouseOver={onHover}
            onMouseLeave={offHover}
          >
            <span className="submit-btn-txt">Send</span>
            <span className="link-arrow_wrap">
              <BtnArrow height={16} width={16} color="#173D33" />
            </span>{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
};
