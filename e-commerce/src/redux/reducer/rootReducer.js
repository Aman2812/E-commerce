import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./reducer";

const rootReducer = combineReducers({
    reducerData : reducer
})

export default rootReducer;