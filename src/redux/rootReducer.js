import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
  //   whiteList: ["cart", "user"],
};

const user = () => {
  return "user";
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
