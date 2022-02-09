import React from "react";
import { CategoriesOptions } from "../../../../assets/data/categoriesOptions";
import { cityOptions } from "../../../../assets/data/cityOptions";
import FromSelect from "../../../FormFormikSelect";
import { FormInput } from "../../../FormInput";
import "./style.css";

export const InfluencerEditPersonalForm = () => {
  return (
    <div className="influencer_edit_form-personal-container">
      <h2> Insert Some Personal data (All Fields are required) </h2>
      <div>
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
          variant="outlined"
          margin={1}
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
        />
        <FromSelect
          name="category"
          label="Category"
          holderName="Category"
          options={CategoriesOptions}
          value="category"
          multiple
          width={320}
          margin={10}
        />
      </div>

      <FormInput
        name="bio"
        label="Bio"
        placeholder="Bio"
        width={660}
        variant="outlined"
        multiline
        rows={3}
      />
    </div>
  );
};