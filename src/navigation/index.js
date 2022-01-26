import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/main/HomePage";
import FavoritePage from "../pages/main/FavoritePage";
import InfluencerPage from "../pages/main/InfluencerPage";
import InfluencerDetailPage from "../pages/main/InfluencerDetailPage";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

export default function Navigation() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="influencer" element={<InfluencerPage />} />
        <Route path="influencer/:id" element={<InfluencerDetailPage />} />
        <Route path="loginPage" element={<LoginPage />} />
        <Route path="loginPage/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </>
  );
}
