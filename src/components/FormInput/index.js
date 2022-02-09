import React from "react";
import { useField } from "formik";
import { FormControl } from "@mui/material";
import Input from "../../commons/Input";
import "./style.css";

export const FormInput = ({
  DefaultValue,
  multiline = false,
  rows,
  variant,
  width,
  margin,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <FormControl className="input_form " error={meta.touched && !!meta.error}>
      <Input
        rows={rows}
        multiline={multiline}
        width={width}
        margin={margin}
        {...field}
        {...props}
        variant={variant}
        defaultValue={DefaultValue}
      />
      {meta.touched && meta.error && (
        <p className="error_input_message"> {meta.error} </p>
      )}
    </FormControl>
  );
};
