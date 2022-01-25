import React from "react";
import { useField } from "formik";
import { FormControl } from "@mui/material";
import Input from "../../commons/Input";

export const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl error={meta.touched && !!meta.error}>
      <Input {...field} {...props} />
      {meta.touched && meta.error && (
        <p className="error_input_message"> {meta.error} </p>
      )}
    </FormControl>
  );
};