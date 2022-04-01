import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/reducer";
import influencers from "./influencers/reducer";
import editInfluencer from "./editInfluencer/reducer";
import favorites from "./Influencer/reducer";
import rates from "./rating/reducer";
import createProfile from "./createProfileInfluencer/reducer";
import order from "./order/reducer";
import users from "./users/reducer";
import editUser from "./editUserInformation/reducer";
import adminEditUser from "./adminEditUserInformation/reducer";
import reports from "./getReports/reducer";
import createOrder from "./userCreateOrder/reducer";

const persistConfig = {
  key: "KEY-1",
  storage,
  whiteList: ["favorite", "auth"],
  blackList: ["influencers, editInfluencer"],
};

const rootReducer = combineReducers({
  auth,
  favorites,
  influencers,
  editInfluencer,
  createProfile,
  rates,
  order,
  users,
  editUser,
  adminEditUser,
  reports,
  createOrder,
});

export default persistReducer(persistConfig, rootReducer);
