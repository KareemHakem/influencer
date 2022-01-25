import React from "react";
import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../../utils/validationSchema";
import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import "./style.css";

const LoginForm = ({ handleLoginSubmit, loading }) => {
  return (
    <div className="full_page_register">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <Form className="form_Login_page">
            <FormInput label="Email" name="email" placeholder="email" />
            <FormInput
              label="Password"
              name="password"
              placeholder="Password"
            />
            <Button
              title="Login"
              type="submit"
              disabled={!dirty || !isValid}
              margin={30}
              loading={loading}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
