import { combineReducers } from "redux";

import appDataReducer from "./appDataReducer/appDataReducer";
import authReducer from "./authReducer/authReducer";

const reducers = combineReducers({
  appDataState: appDataReducer,
  authState: authReducer,
});

export default reducers;
