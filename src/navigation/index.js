import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/main/HomePage";
import FavoritePage from "../pages/main/FavoritePage";
import InfluencerPage from "../pages/main/InfluencerPage";
import InfluencerDetailPage from "../pages/main/InfluencerDetailPage";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="favorite" element={<FavoritePage />} />
      <Route path="influencer" element={<InfluencerPage />} />
      <Route path="influencerDetail" element={<InfluencerDetailPage />} />
    </Routes>
  );
}
