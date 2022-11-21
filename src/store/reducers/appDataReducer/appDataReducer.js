import { createStore } from "redux";

const initialState = {
  appData: null,
};

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

const appDataStore = createStore(appDataReducer,initialState);


export default appDataStore