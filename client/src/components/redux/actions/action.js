import { USER } from "../action-types/type";

export const loginUser = (data) => {
  
    return{
        type: USER,
        data,
    };
};