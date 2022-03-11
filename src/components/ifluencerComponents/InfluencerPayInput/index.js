import React from "react";

import { Form, Formik } from "formik";

import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import SteppersMui from "../../StepersMui";
import "./style.css";

export default function InfluencerPayInput({ handlePaySubmit, loading }) {
  return (
    <>
      <SteppersMui activeStep={0} />
      <div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            businessName: "",
            website: "",
            instagram: "",
            package: "",
          }}
          // validateOnChange={validateOnChange}
          onSubmit={handlePaySubmit}
        >
          {({ isValid, isSubmitting, dirty }) => (
            <Form className="inputCardPayInfo">
              <div className="inputCardPayInfoContainer">
                <div className="inputCardPayInfoContainerValues">
                  <FormInput
                    name="name"
                    label="Name"
                    placeholder="Name"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="email"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="phone"
                    label="Phone"
                    placeholder="Phone"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="businessName"
                    label="Business Name"
                    placeholder="Business Name"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="website"
                    label="Website"
                    placeholder="Website"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="instagram"
                    label="Instagram"
                    placeholder="Instagram"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="package"
                    label="Package"
                    placeholder="Package"
                    variant="outlined"
                    width={800}
                  />
                  <FormInput
                    name="Details"
                    label="Details"
                    placeholder="Details"
                    variant="outlined"
                    width={800}
                    multiline
                    rows={3}
                  />
                </div>
                <Button
                  title="Continue"
                  type="submit"
                  disabled={!dirty || !isValid}
                  loading={loading}
                  width={160}
                  margin={50}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
