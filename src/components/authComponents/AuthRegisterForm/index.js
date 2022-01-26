import React from "react";

import { Formik, Form } from "formik";
import { validationRegisterSchema as validationSchema } from "../../../utils/validationSchema";

import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import image from "../../../assets/images/register_image.png";
import { RegisterFormInput } from "./style";
import "./style.css";
import { Link } from "react-router-dom";

const AuthRegisterForm = ({
  handleNavigationLoginForm,
  handleAuthRegisterUserSubmit,
  loading,
}) => {
  return (
    <div className="auth_register_page-container">
      <div className="auth_register_page-formik">
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
            <Form className="register_form_input">
              <div>
                <h2 className="register_page_title">Welcome to Website Name</h2>
              </div>

              <FormInput
                style={RegisterFormInput}
                name="firstName"
                placeholder="First Name"
                label="Fist Name"
              />
              <FormInput
                style={RegisterFormInput}
                name="secondName"
                placeholder="Second Name"
                label="Second Name"
              />
              <FormInput
                style={RegisterFormInput}
                name="email"
                placeholder="Email"
                label="Email"
              />
              <FormInput
                style={RegisterFormInput}
                name="password"
                placeholder="Password"
                label="Password"
              />
              <FormInput
                name="confirmPassword"
                style={RegisterFormInput}
                placeholder="Confirm Password"
                label="Confirm Password"
              />

              <Button
                className="btn_register_form"
                title="Register"
                type="submit"
                disabled={!dirty || !isValid}
                loading={loading}
                width={300}
                height={50}
              />
            </Form>
          )}
        </Formik>
        <div className="login_form_input_link-container">
          <p>You don't have account?</p>
          <div
            className="register_form_link"
            onClick={handleNavigationLoginForm}
          >
            login
          </div>
        </div>
      </div>
      <img
        className="auth_user_form_image"
        src={image}
        alt="register_image_form"
      />
    </div>
  );
};
export default AuthRegisterForm;
