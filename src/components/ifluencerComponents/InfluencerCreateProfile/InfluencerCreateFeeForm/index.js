import React from "react";
import { FormInput } from "../../../FormInput";

import "./style.css";
export default function InfluencerCreateFeeForm() {
  return (
    <div className="influencer_edit_form-fee-container">
      <h2> Tell us about your fee </h2>
      <FormInput
        name="price"
        label="Price"
        placeholder="Price"
        width={320}
        margin={1}
        variant="outlined"
      />
    </div>
  );
}
