import React from "react";
import { CategoriesOptions } from "../../../../assets/data/categoriesOptions";
import { cityOptions } from "../../../../assets/data/cityOptions";
import FromSelect from "../../../FormFormikSelect";
import { FormInput } from "../../../FormInput";
import "./style.css";

export default function InfluencerCreatePersonalForm() {
  return (
    <div className="influencer_edit_form-personal-container">
      <h2> Insert Some Personal data (All Fields are required) </h2>
      <div className="influencer_edit_form-personal" >
        <FormInput
          name="name"
          label="Name"
          placeholder="Name"
          width={320}
          margin={1}
          variant="outlined"
        />
        <FormInput
          name="phoneNumber"
          label="Phone Number"
          placeholder="Phone Number"
          width={320}
          margin={1}
          variant="outlined"
        />
      </div>

      <div className="influencer_edit_form-personal-selector">
        <FromSelect
          name="city"
          label="City"
          holderName="City"
          options={cityOptions}
          multiple={false}
          width={320}
          margin={10}
          variant="outlined"
        />
        <FromSelect
          name="category"
          label="Category"
          holderName="Category"
          options={CategoriesOptions}
          multiple={true}
          width={320}
          margin={10}
          variant="outlined"
        />
      </div>

      <FormInput
        name="bio"
        label="Bio"
        placeholder="Bio"
        width={660}
        margin={1}
        rows={3}
        variant="outlined"
      />
    </div>
  );
}
