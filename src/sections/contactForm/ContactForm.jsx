import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BtnArrow } from "../../components/BtnArrow";
export const ContactForm = () => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.number().min(6).max(12).required("Reqired"),
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
      onSubmit={(values) => {
          console.log('Contact form data:', values)
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

            <button type="submit" className="submit-btn">Send <span className="link-arrow_wrap"><BtnArrow height={16} width={16} color="#173D33"/></span> </button>
          </Form>
        )}
      </Formik>
    
  );
};
