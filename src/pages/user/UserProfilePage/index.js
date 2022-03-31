import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../../redux/editUserInformation/action";

import UserProfile from "../../../components/userComponints/UserProfile";
import { toast } from "react-toastify";

export default function UserProfilePage() {
  const { loading } = useSelector((state) => state.editUser);
  const { currentUser } = useSelector((state) => state.auth);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigationUserFormInput = (values) => {
    dispatch(editUser(values, id));
    navigate(`/user-profile/${id}`);
    toast.success("Success To Update Your Information");
  };

  const handleProfileNavigate = () => {};
  const handleOrdersProfileNavigate = () => {
    navigate("/user-orders");
  };
  const handleFavoriteProfileNavigate = () => {
    navigate("/favorite");
  };
  return (
    <div>
      <UserProfile
        handleProfileNavigate={handleProfileNavigate}
        handleOrdersProfileNavigate={handleOrdersProfileNavigate}
        handleFavoriteProfileNavigate={handleFavoriteProfileNavigate}
        handleNavigationUserFormInput={handleNavigationUserFormInput}
        loading={loading}
        currentUser={currentUser}
      />
    </div>
  );
}
