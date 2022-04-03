import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authRegisterUserReducer } from "../../../redux/auth/action";

import { UserNavigation } from "../../../hooks/UserNavigation";
import AuthRegisterForm from "../../../components/authComponents/AuthRegisterForm";

export default function RegisterPage() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

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
  };
  const handleNavigationLoginForm = () => {
    Navigate("/Login");
  };

  return (
    <AuthRegisterForm
      handleNavigationLoginForm={handleNavigationLoginForm}
      handleAuthRegisterUserSubmit={handleAuthRegisterUserSubmit}
      loading={loading}
    />
  );
}
