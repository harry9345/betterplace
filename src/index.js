import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PaypalButton from "./PaypalButton";
import { Formik } from "formik";

const submitHandler = (_, formik) => {
  setTimeout(() => {
    formik.setValues({ _paypal_token: "fake_paypal_token" });
    formik.setSubmitting(false);
  }, 3000);
};

ReactDOM.render(
  <React.StrictMode>
    <Formik onSubmit={submitHandler} initialValues={{}}>
      <PaypalButton />
    </Formik>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
