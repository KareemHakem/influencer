import React, { useState } from "react";

import { Formik, Form } from "formik";
import { validationEditProfile as validationSchema } from "../../../utils/validationSchema";

import { InfluencerEditPersonalForm } from "./InfluencerEditPersonalForm";
import InfluencerEditFeeForm from "./InfluencerEditFeeForm";
import InfluencerEditSocialMediaForm from "./InfluencerEditSocialMediaForm";
import InfluencerEditYoutubeForm from "./InfluencerEditYoutubeForm";

import { FormInput } from "../../FormInput";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "../../../commons/Button";

import "./style.css";

export default function InfluencerEditForm({
  handleEditInfluencerProfile,
  loading,
  influencer,
}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: influencer?.name || "",
          phoneNumber: influencer?.phoneNumber || "",
          city: influencer?.city || "",
          category: influencer?.category || [],
          bio: influencer?.bio || "",
          price: influencer?.price || "",
          fbAccount: influencer?.fbAccount || "",
          fbFriends: influencer?.fbFriends || "",
          instAccount: influencer?.instAccount || "",
          instFollowers: influencer?.instFollowers || "",
          image: influencer?.image || "",
          youtubeAccount: influencer.youtubeAccount || "",
          youtubeSubscribers: influencer.youtubeSubscribers || "",
        }}
        validationSchema={validationSchema}
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
                    <InfluencerEditYoutubeForm />
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
