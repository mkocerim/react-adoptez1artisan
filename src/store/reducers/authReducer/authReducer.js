import { createStore } from "redux";

const localStorageToken = localStorage.getItem("token");

const initialState = {
  token: localStorageToken,
};

export const SET_TOKEN = "set_token";
export const REMOVE_TOKEN = "remove_token";

const authReducer = (state = initialState, action) => {
  console.log(">> AUTH REDUCER ", state, action);

  //action.type
  //action.payload

  switch (action.type) {
    case SET_TOKEN:
      console.log("AUTH REDUCER SET TOKEN", action.payload);
      return {
        ...state,
        token: action.payload.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

const authStore = createStore(authReducer, initialState);

export default authStore;
