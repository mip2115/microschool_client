import {SET_SIGNUP_MODAL_IS_OPEN} from '../actions/actionTypes';
import { combineReducers } from "redux";

const setSignupModalIsOpenReducer = (state=false, action) => {
    console.log("recvd: ", action.payload);
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