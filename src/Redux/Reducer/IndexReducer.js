import { combineReducers } from "redux";
import Reducer, { TrueLoader,  OwnerData } from "./Reducer";

const IndexReducer = combineReducers({ Reducer , OwnerData, TrueLoader});
export default IndexReducer;
