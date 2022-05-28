import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserNavigation = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      Navigate("/");
    }
  }, [Navigate, isAuthenticated]);
};
