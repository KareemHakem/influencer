import React from "react";
import { useField } from "formik";
import { FormControl } from "@mui/material";
import Input from "../../commons/Input";
import "./style.css";

export const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl className="input_form " error={meta.touched && !!meta.error}>
      <Input width={550} {...field} {...props} variant="standard" />
      {meta.touched && meta.error && (
        <p className="error_input_message"> {meta.error} </p>
      )}
    </FormControl>
  );
};
