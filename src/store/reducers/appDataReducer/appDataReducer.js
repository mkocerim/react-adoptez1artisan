import { createStore } from "redux";

const initialState = {
  appData: null,
};

export const SET_APP_DATA = "set_app_data";
export const REMOVE_APP_DATA = "remove_app_data";

const appDataReducer = (state = initialState, action) => {
  console.log(">> APP DATA REDUCER ", state, action);

  //action.type
  //action.payload

  switch (action.type) {
    case "set_app_data":
      return {
        ...state,
        appData: action.payload.appData,
      };
    case "remove_app_data":
      return {
        ...state,
        appData: null,
      };
    default:
      return state;
  }
};

export default appDataReducer;
