import React from "react";
import { Form, Formik, Field } from "formik";

import { Button } from "../../../commons/Button";
import { FormInput } from "../../FormInput";

import "./style.css";

export default function AdminEditInputUsers({
  handleEditAdminUserInfo,
  currentUser,
  loading,
}) {
  return (
    <Formik
      initialValues={{
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        isAdmin: currentUser?.isAdmin || false,
        isInfluencer: currentUser?.isInfluencer || false,
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
            <div className="checkboxAdminFlex">
              <p> is Admin </p>
              <Field type="checkbox" name="isAdmin" />
            </div>

            <div className="checkboxAdminFlex">
              <p> Is Influencer </p>
              <Field type="checkbox" name="isInfluencer" />
            </div>
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
