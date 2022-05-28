import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { axios } from "../api/axios";

import { useSelector } from "react-redux";
import { cancelOrder } from "../redux/order/action";

import { toast } from "react-toastify";

import NavBar from "../components/NavBar";
import HomePage from "../pages/main/HomePage";
import FavoritePage from "../pages/main/FavoritePage";
import InfluencerPage from "../pages/main/InfluencerPage";
import InfluencerDetailPage from "../pages/main/InfluencerDetailPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import InfluencerProfilePage from "../pages/influencer/InfluencerProfilePage";
import InfluencerEditProfile from "../pages/influencer/InfluencerEditProfile";
import InfluencerCreateProfile from "../components/ifluencerComponents/InfluencerCreateProfile";
import InfluencerPayPage from "../pages/influencer/InfluencerPayPage";
import InfluencerSelectPayPage from "../pages/influencer/InfluencerSelectPayPage";
import InfluencerPayPalPage from "../pages/influencer/InfluencerPayPalPage";
import InfluencerFawryPage from "../pages/influencer/InfluencerFawryPage";
import UserProfilePage from "../pages/user/UserProfilePage";
import UserGetOrders from "../pages/orders/UserGetOrders";
import AdminPanelPage from "../pages/admin/AdminPanelPage";
import AdminInfinfluencerPage from "../pages/admin/AdminInfinfluencerPage";
import AdminReportInfluencerPage from "../pages/admin/AdminReportInfluencerPage";
import AdminEditInputUsersPage from "../pages/admin/AdminEditInputUsersPage";
import UserCreteReport from "../pages/user/UserCreateReport";
import AdminGetOrders from "../pages/orders/AdminGetOrders";
import InfluencerGetOrders from "../pages/orders/InfluencerGetOrders";

export default function Navigation() {
  const { currentUser } = useSelector((state) => state.auth);
  const { orderStartingTime, success } = useSelector((state) => state.order);

  const navigate = useNavigate();
  const newDate = Date.now();

  useEffect(() => {
    if (newDate === orderStartingTime + 60 * 2) {
      if (success) {
        toast.success("Your order is compleat");
      } else {
        cancelOrder();
        navigate(`/influencer`);
        toast.error("your order is cancel");
      }
    }
  }, [orderStartingTime, newDate, success, navigate]);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${currentUser?.token}`;

  return (
    <>
      <NavBar />
      
      <Routes>                        
        {/* MAIN */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="influencer" element={<InfluencerPage />} />
        <Route path="influencer-paginate/:pageNumber" element={<InfluencerPage />} />
        <Route path="influencer/:id" element={<InfluencerDetailPage />} />

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Influncer */}
        <Route path="profile-influencer/:id" element={<InfluencerProfilePage />} />
        <Route path="/editprofile/:id" element={<InfluencerEditProfile />} />
        <Route path="/create-profile" element={<InfluencerCreateProfile />} />
        <Route path="/order/:influencer/:id" element={<InfluencerPayPage />} />
        <Route path="/user/selectPayment" element={<InfluencerSelectPayPage />}/>
        <Route path="/influencer-orders" element={<InfluencerGetOrders />} />
        <Route path="/placeOrder/PayPal" element={<InfluencerPayPalPage />} />
        <Route path="/placeOrder/Fawry" element={<InfluencerFawryPage />} />

        {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Admin */}
        <Route path="/manage-admin-panel" element={<AdminPanelPage />} />
        <Route path="/admin-manage-influencer" element={<AdminInfinfluencerPage />} />
        <Route path="/admin-orders" element={<AdminGetOrders />} />
        <Route path="/admin-manage-reports" element={<AdminReportInfluencerPage />} />

        {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* Users */}
        <Route path="/user-profile/:id" element={<UserProfilePage />} />
        <Route path="/report-influencer/:id" element={<UserCreteReport />} />
        <Route path="/admin/users/:id" element={<AdminEditInputUsersPage />} />
        <Route path="/user-orders" element={<UserGetOrders />} />
      </Routes>
    </>
  );
}
