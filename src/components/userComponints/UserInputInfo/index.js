import React from "react";
import { Form, Formik } from "formik";
import { validationSchemaUserEditProfile as validationSchema } from "../../../utils/validationSchema";
import { Button } from "../../../commons/Button";
import { FormInput } from "../../FormInput";
import "./style.css";

export default function UserInputInfo({
  handleNavigationUserFormInput,
  loading,
  currentUser,
}) {
  return (
    <Formik
      initialValues={{
        name: currentUser?.name || "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleNavigationUserFormInput}
    >
      {({ isValid, isSubmitting, dirty }) => (
        <Form className="inputCardUserInfoContainer">
          <div className="inputCardUserInfo">
            <h2 className="cardTitleInfoUser"> Update your information </h2>
            <FormInput
              name="name"
              label="Name"
              placeholder="Name"
              variant="outlined"
              width={800}
            />
            <FormInput
              name="password"
              label="Password"
              placeholder="Password"
              variant="outlined"
              width={800}
            />
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              variant="outlined"
              width={800}
            />
            <Button
              title="UPDATE"
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              loading={loading}
              width={160}
              margin={50}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
