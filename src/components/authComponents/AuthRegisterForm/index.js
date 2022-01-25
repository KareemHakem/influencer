import React from "react";
import { Formik, Form } from "formik";
import { validationRegisterSchema as validationSchema } from "../../../utils/validationSchema";
import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import "./style.css";

const AuthRegisterForm = ({ handleAuthRegisterUserSubmit, loading }) => {
  return (
    <div
      style={{ marginTop: 400 }}
      className="auth_user_register_form-container"
    >
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleAuthRegisterUserSubmit}
      >
        {({ dirty, isValid }) => (
          <Form>
            <FormInput
              name="firstName"
              placeholder="First Name"
              label="Fist Name"
            />
            <FormInput
              name="secondName"
              placeholder="Second Name"
              label="Second Name"
            />
            <FormInput name="email" placeholder="Email" label="Email" />
            <FormInput
              name="password"
              placeholder="Password"
              label="Password"
            />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              label="Confirm Password"
            />

            <Button
              title="Register"
              type="submit"
              disabled={!dirty || !isValid}
              loading={loading}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AuthRegisterForm;
