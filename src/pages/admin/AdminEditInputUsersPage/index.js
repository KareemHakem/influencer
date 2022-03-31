import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { adminEditUser } from "../../../redux/adminEditUserInformation/action";

import AdminEditInputUsers from "../../../components/adminComponents/AdminEditInputUsers";

export default function AdminEditInputUsersPage() {
  const { loading } = useSelector((state) => state.adminEditUser);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  const usersDetail = users.find((i) => i._id === id);

  console.log(usersDetail);

  const handleEditAdminUserInfo = (values, id) => {
    dispatch(adminEditUser(values, id));
    navigation("/manage-admin-panel");
  };

  return (
    <div>
      <AdminEditInputUsers
        handleEditAdminUserInfo={handleEditAdminUserInfo}
        loading={loading}
        currentUser={usersDetail}
      />
    </div>
  );
}
