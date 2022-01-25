import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/reducer";

import favorites from "./Influencer/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["favorite", "auth"],
};

const rootReducer = combineReducers({
  auth,
  favorites,
});

export default persistReducer(persistConfig, rootReducer);
