import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../../../components/userComponints/UserProfile";

export default function UserProfilePage() {
  const Navigate = useNavigate();
  const handleProfileNavigate = () => {};
  const handleOrdersProfileNavigate = () => {
    Navigate("/user-orders");
  };
  const handleFavoriteProfileNavigate = () => {
    Navigate("/favorite");
  };
  return (
    <div>
      <UserProfile
        handleProfileNavigate={handleProfileNavigate}
        handleOrdersProfileNavigate={handleOrdersProfileNavigate}
        handleFavoriteProfileNavigate={handleFavoriteProfileNavigate}
      />
    </div>
  );
}
