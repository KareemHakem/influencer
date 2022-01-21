import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favorites from "./Influencer/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["favorite"],
};

const rootReducer = combineReducers({
  favorites,
});

export default persistReducer(persistConfig, rootReducer);
