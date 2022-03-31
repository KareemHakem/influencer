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


 

  const handleEditAdminUserInfo = (values) => {
    const endpoint = 'users'
    dispatch(adminEditUser(values, id, endpoint));
    navigation("/manage-admin-panel");
  console.log(values)
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
