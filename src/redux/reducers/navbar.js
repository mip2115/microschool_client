import {SET_NAVBAR_COMPONENT} from '../actions/actionTypes';
import { combineReducers } from "redux";

const setNavbarComponentReducer = (state='home', action) => {
    switch(action.type) {
        case SET_SIGNUP_MODAL_IS_OPEN:
            return action.payload;
        default:
            return state;
    }
};



//export default setSignupModalIsOpenReducer;
export default combineReducers({
    isSignupModalOpen: setSignupModalIsOpenReducer,
})