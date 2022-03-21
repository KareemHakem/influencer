import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import { validationEditProfile as validationSchema } from "../../../utils/validationSchema";

import { FormInput } from "../../FormInput";
import { Button } from "../../../commons/Button";

import Checkbox from "@mui/material/Checkbox";
import InfluencerCreatePersonalForm from "./InfluencerCreatePersonalForm";
import InfluencerCreateFeeForm from "./InfluencerCreateFeeForm";
import InfluencerCreateSocialMediaForm from "./InfluencerCreateSocialMediaForm";
import InfluencerCreateYoutubeForm from "./InfluencerCreateYoutubeForm";
import { createProfileInfluencer } from "../../../redux/createProfileInfluencer/action";
import { useDispatch } from "react-redux";
import "./style.css";

export default function InfluencerCreateProfile({
  handleSubmit,
  loading,
  handleNavigateInfluencerPage,
}) {
  const [checked, setChecked] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const onSubmit = (values) => {
    console.log(values);
    dispatch(createProfileInfluencer(values));
    navigate(`/influencer`);
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
        onSubmit={onSubmit}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <Form className="influencer_edit_hed_page">
            <h1>Edit influenceur profile </h1>
            <div className="influencer_edit_form_card-container">
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
                onClick={handleNavigateInfluencerPage}
                width={100}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
