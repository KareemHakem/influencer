import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { authLoginUserReducer } from "../../../redux/auth/action";

import { UserNavigation } from "../../../hooks/UserNavigation";
import AuthLoginForm from "../../../components/authComponents/AuthLoginForm";


export default function LoginPage() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  UserNavigation();

  const handleAuthLoginUserSubmit = (values) => {
    const { email, password } = values;
    const body = { email, password };
    dispatch(authLoginUserReducer(body));
  };

  return (
    <AuthLoginForm
      handleAuthLoginUserSubmit={handleAuthLoginUserSubmit}
      loading={loading}
    />
  );
}
