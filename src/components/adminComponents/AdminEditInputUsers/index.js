import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../../commons/Button";
import { FormInput } from "../../FormInput";
import "./style.css";

export default function AdminEditInputUsers({
  handleEditAdminUserInfo,
  loading,
}) {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      // validateOnChange={validateOnChange}
      onSubmit={handleEditAdminUserInfo}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="AdminEditInputUsersComponents">
          <h1 className="cardTitleInputUsers">Here you can update Users</h1>
          <div className="AdminEditInputUsers">
            <FormInput
              name="name"
              label="Name"
              placeholder="Name"
              variant="outlined"
              width={850}
            />
            <FormInput
              name="email"
              label="Email"
              placeholder="Email"
              variant="outlined"
              width={850}
            />
            <Button
              title="UPDATE"
              type="submit"
              disabled={!dirty || !isValid}
              loading={loading}
              width={120}
              margin={27}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
