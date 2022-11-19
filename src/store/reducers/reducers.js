import { combineReducers } from "redux";

import appDataReducer from './appDataReducer/appDataReducer';
import authReducer from './authReducer/authReducer';

const reducers = combineReducers({
    
    appData: appDataReducer,
    auth: authReducer



})

export default reducers