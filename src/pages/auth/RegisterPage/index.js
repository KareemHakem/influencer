import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { authRegisterUserReducer } from "../../../redux/auth/action";

import { UserNavigation } from "../../../hooks/UserNavigation";
import AuthRegisterForm from "../../../components/authComponents/AuthRegisterForm";

export default function RegisterPage() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  UserNavigation();

  const handleAuthRegisterUserSubmit = (values) => {
    const { firstName, secondName, email, password, confirmPassword } = values;
    const body = {
      name: `${firstName} ${secondName}`,
      email,
      password,
      confirmPassword,
    };
    dispatch(authRegisterUserReducer(body));
    console.log(body, "kareem body ........................");
  };
  return (
    <AuthRegisterForm
      handleAuthRegisterUserSubmit={handleAuthRegisterUserSubmit}
      loading={loading}
    />
  );
}
