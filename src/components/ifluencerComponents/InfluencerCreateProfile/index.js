import React, { useState } from "react";

import { Formik, Form } from "formik";
import { validationEditProfile as validationSchema } from "../../../utils/validationSchema";

import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";

import Checkbox from "@mui/material/Checkbox";
import InfluencerCreatePersonalForm from "./InfluencerCreatePersonalForm";
import InfluencerCreateFeeForm from "./InfluencerCreateFeeForm";
import InfluencerCreateSocialMediaForm from "./InfluencerCreateSocialMediaForm";
import InfluencerCreateYoutubeForm from "./InfluencerCreateYoutubeForm";
import "./style.css";

export default function InfluencerCreateProfile({
  handleCreateProfile,
  loading,
}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
          youtubeAccount: "",
          youtubeSubscribers: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleCreateProfile}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <div className="influencer_edit_hed_page">
            <h1>Edit influenceur profile </h1>
            <Form className="influencer_edit_form_card-container">
              <InfluencerCreatePersonalForm />
              <InfluencerCreateFeeForm />
              <InfluencerCreateSocialMediaForm />
              <div className="influencer_edit_image_profile">
                <h2> Update Image </h2>
                <FormInput
                  name="image"
                  label="Image"
                  placeholder="Image"
                  width={330}
                />
              </div>

              <div className="checkBoxForm">
                <div className="checkBoxForm-p">
                  <p> Are You Youtuber? </p>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>

                {checked && (
                  <div>
                    <InfluencerCreateYoutubeForm />
                  </div>
                )}
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
