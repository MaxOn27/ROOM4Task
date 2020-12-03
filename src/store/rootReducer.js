import {combineReducers} from "redux";

import {
    songsReducer
} from './reducer/reducer';

const rootReducer = combineReducers({
    songs: songsReducer
});

export default rootReducer;