import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/reducer";
import influencers from "./influencers/reducer";

import favorites from "./Influencer/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["favorite", "auth"],
  blackList: ["imfluencers"],
};

const rootReducer = combineReducers({
  auth,
  favorites,
  influencers,
});

export default persistReducer(persistConfig, rootReducer);
