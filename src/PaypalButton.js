import React from "react";
import ReactDOM from "react-dom";
import { connect } from "formik";

const buttonStyle = {
  color: "gold",
  fundingicons: false,
  label: "checkout",
  shape: "rect",
  size: "responsive",
  tagline: false,
};

const PaypalButton = (props) => {
  const createOrderOrBillingAgreement = async () => {
    await sleepUntilSubmitted();
    props.formik.submitForm(); // submit will call api with form values and inject _paypal_token into the form values
    if (props.formik.isValid) {
      props.formik.setSubmitting(true);
    }
    return props.formik.values._paypal_token;
  };

  const sleepUntilSubmitted = async () => {
    const sleep = async (ms) =>
      new Promise((resolve) => {
        setTimeout(resolve, ms);
      });

    while (props.formik.isSubmitting) {
      await sleep(100);
    }
  };

  const onApprove = () => {
    // do something on success
    console.log("on submite form");
  };

  const paypal = window["paypal"];
  if (!paypal) return null;

  const Button = paypal.Buttons.driver("react", { React, ReactDOM });
  const { isSubmitting } = props.formik;

  return (
    <div>
      <div style={(isSubmitting && { display: "none" }) || {}}>
        <Button
          commit
          env="sandbox"
          createBillingAgreement={createOrderOrBillingAgreement}
          onApprove={onApprove}
          onCancel={() => props.formik.setSubmitting(false)}
          onError={() => props.formik.setSubmitting(false)}
          style={buttonStyle}
        />
      </div>
    </div>
  );
};

export default connect(PaypalButton);
