import React from "react";

import { Form, Formik } from "formik";

import { validationSchemaUserMakeOrder as validationSchema } from "../../../utils/validationSchema";

import FromSelect from "../../FormFormikSelect";
import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import SteppersMui from "../../StepersMui";
import { PackagesOptions } from "../../../assets/data/packagesOptions";
import "./style.css";

export default function InfluencerPayInput({
  handlePaySubmit,
  currentUser,
  loading,
}) {
  return (
    <>
      <SteppersMui activeStep={0} />
      <div>
        <Formik
          initialValues={{
            email: currentUser.email || "",
            phone: "",
            businessName: currentUser.name || "",
            website: "",
            instagram: "",
            package: "",
            businessDetails: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handlePaySubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="inputCardPayInfo">
              <div className="inputCardPayInfoContainer">
                <div className="inputCardPayInfoContainerValues">
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
                  <div className="formSelectPackage">
                    <FromSelect
                      name="package"
                      label="Package"
                      holderName="package"
                      options={PackagesOptions}
                      multiple={false}
                      width={800}
                      variant="outlined"
                    />
                  </div>
                  <FormInput
                    name="businessDetails"
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
