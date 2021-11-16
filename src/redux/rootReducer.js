import { combineReducers } from "redux";
// import reducer from './todos/todoReducer';
import reducer from "./moviereview/reducer";

const rootReducer = combineReducers({
    fav: reducer
});

export default rootReducer;