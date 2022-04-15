import { USER } from "../action-types/type";
import { CLEAR } from "../action-types/type";

const initialUser = () => {
    
    const getUser = localStorage.getItem('user');  
    let user;
    if(getUser){
        user = JSON.parse(getUser);
    }
    
    return user;
}

const initialState = {
    user: initialUser()
}

export const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case USER: {
            return {
                user:action.data
            };
        }
        case CLEAR: {
            return null
        }
        default:
            return state;
    }
}
