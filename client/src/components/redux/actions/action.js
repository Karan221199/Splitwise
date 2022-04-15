import { USER } from "../action-types/type";
import { CLEAR } from "../action-types/type";

export const loginUser = (data) => {
  
    return{
        type: USER,
        data,
    };
};

export const logoutUser = (data) => {
  
    return{
        type: CLEAR,
        data,
    };
};