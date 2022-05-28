import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import AuthModal from "../AuthModal";

const PrivateRoute = ({ path, element, ...props }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <AuthModal />;
  return (
    <Fragment>
      <Route path={path} element={element} {...props} />
    </Fragment>
  );
};
export default PrivateRoute;


