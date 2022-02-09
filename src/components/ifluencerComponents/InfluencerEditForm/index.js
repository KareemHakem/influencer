import React from "react";
import { Formik, Form } from "formik";
// import { validationEditProfile as validationSchema } from "../../../utils/validationSchema";
import { InfluencerEditPersonalForm } from "./InfluencerEditPersonalForm";
import InfluencerEditFeeForm from "./InfluencerEditFeeForm";
import InfluencerEditSocialMediaForm from "./InfluencerEditSocialMediaForm";
import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";
import "./style.css";

export default function InfluencerEditForm({
  handleEditInfluencerProfile,
  loading,
}) {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          city: "",
          category: [],
          bio: "",
          price: "",
          fbAccount: "",
          fbFriends: "",
          instAccount: "",
          instFollowers: "",
          image: "",
        }}
//         validationSchema={validationSchema}
        onSubmit={handleEditInfluencerProfile}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <div className="influencer_edit_hed_page">
            <h1>Edit influenceur profile </h1>
            <Form className="influencer_edit_form_card-container">
              <InfluencerEditPersonalForm />
              <InfluencerEditFeeForm />
              <InfluencerEditSocialMediaForm />
              <div className="influencer_edit_image_profile">
                <h2> Update Image </h2>
                <FormInput
                  name="image"
                  label="Image"
                  placeholder="Image"
                  width={330}
                />
              </div>
              <Button
                className="influencer_edit_form_btn"
                title="create"
                type="submit"
                disabled={!dirty || !isValid}
                loading={loading}
                width={100}
              />
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
