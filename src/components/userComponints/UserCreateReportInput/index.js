import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../../FormInput";
import { validationSchemaUserReportInfluencer as validationSchema } from "../../../utils/validationSchema";
import { Button } from "../../../commons/Button";

import "./style.css";

export default function UserCreateReportInput({
  handleUserReportInfluencer,
  loading,
}) {
  return (
    <div>
      <Formik
        initialValues={{
          infName: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleUserReportInfluencer}
      >
        {({ isValid, dirty }) => (
          <Form className="userInputReportCardContainer">
            <h1>Here you can report influencer</h1>
            <div className="userInputReportCard">
              <FormInput
                name="infName"
                label="Influencer Name"
                placeholder="Influencer Name"
                width={660}
              />
              <FormInput
                name="description"
                label="Description"
                placeholder="Description"
                width={660}
                variant="outlined"
                multiline
                rows={3}
              />
              <Button
                disabled={!dirty || !isValid}
                title="REPORT"
                type="submit"
                loading={loading}
                width={100}
                style={{ marginLeft: 450, marginTop: 50 }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
