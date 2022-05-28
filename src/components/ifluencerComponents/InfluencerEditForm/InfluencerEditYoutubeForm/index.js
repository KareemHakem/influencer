import React from "react";
import { FormInput } from "../../../FormInput";
import "./style.css";

export default function InfluencerEditYoutubeForm() {
  return (
    <div className="influencer_edit_form-social_media-container">
      <h2> Tell us about your fee </h2>
      <div className="influencer_edit_form-social_media">
        <FormInput
          name="youtubeAccount"
          label="Youtube Channel"
          placeholder="Youtube Channel"
          width={320}
          margin={1}
          variant="outlined"
        />
        <FormInput
          name="youtubeSubscribers"
          label="Subscribers"
          placeholder="Subscribers"
          width={320}
          margin={1}
          variant="outlined"
        />
      </div>
    </div>
  );
}
