import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/reducer";
import influencers from "./influencers/reducer";
import editInfluencer from "./editInfluencer/reducer";
import favorites from "./Influencer/reducer";
import rates from "./rating/reducer";
import createProfile from "./createProfileInfluencer/reducer"
import order from './order/reducer'


const persistConfig = {
  key: "KEY",
  storage,
  whiteList: ["favorite", "auth", 'order'],
  blackList: ["imfluencers, editInfluencer"],
};

const rootReducer = combineReducers({
  auth,
  favorites,
  influencers,
  editInfluencer,
  createProfile,
  rates,
  order,
});

export default persistReducer(persistConfig, rootReducer);
