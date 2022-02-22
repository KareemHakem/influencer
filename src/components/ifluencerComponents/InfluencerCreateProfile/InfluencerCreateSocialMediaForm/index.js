import React from "react";
import { FormInput } from "../../../FormInput";
import "./style.css";

export default function InfluencerCreateSocialMediaForm() {
  return (
    <div className="influencer_edit_form-social_media-container">
      <h2> Tell us about your fee </h2>
      <div>
        <FormInput
          name="fbAccount"
          label="Facebook Account"
          placeholder="Facebook Account"
          width={320}
          margin={1}
          variant="outlined"
        />
        <FormInput
          name="fbFriends"
          label="Number of friends"
          placeholder="Number of friends"
          width={320}
          margin={1}
          variant="outlined"
        />
      </div>
      <div>
        <FormInput
          name="instAccount"
          label="Instagram Account"
          placeholder="Instagram Account"
          width={320}
          margin={1}
          variant="outlined"
        />
        <FormInput
          name="instFollowers"
          label="Instagram Followers"
          placeholder="Instagram Followers"
          width={320}
          margin={1}
          variant="outlined"
        />
      </div>
    </div>
  );
}
