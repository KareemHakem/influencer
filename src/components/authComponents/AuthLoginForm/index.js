import React from "react";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../../utils/validationSchema";

import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import { LoginAnimation } from "../LoginAnination";

import "./style.css";

const LoginForm = ({ handleAuthLoginUserSubmit, loading }) => {
  return (
    <div className="auth_login_form-container">
      <div className="login_form_image">
        <LoginAnimation />
      </div>
      <div className="login_form_container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleAuthLoginUserSubmit}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="form_Login_page">
              <h2> Welcome to Website Name</h2>
              <div className="loginFormInput">
                <FormInput
                  label="Email"
                  name="email"
                  placeholder="Email"
                  variant="standard"
                />
              </div>
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                variant="standard"
              />
              <Button
                className="btn_login_form"
                title="Login"
                type="submit"
                disabled={!dirty || !isValid}
                loading={loading}
              />
            </Form>
          )}
        </Formik>
        <div className="register_form_input_link-container">
          <p>
            You don't have account?
            <Link className="register_form_link" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
