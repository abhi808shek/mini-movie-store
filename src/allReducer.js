import {combineReducers} from "redux";
import {moviesReducer} from "./Components/Redux/reducer"


const allReducers = combineReducers({
    moviesReducer
});

export default allReducers;