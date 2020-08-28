import {SET_SEARCH_QUERY} from '../actions/actionTypes';

import { combineReducers } from "redux";

const setSearchQueryReducer = (state='', action) => {
    switch(action.type) {
        case SET_SEARCH_QUERY:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    searchQuery: setSearchQueryReducer,
})