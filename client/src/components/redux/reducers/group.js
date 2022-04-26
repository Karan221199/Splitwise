import {GROUP} from "../action-types/type";

const initialGroup = () => {
    const groups = [];
    return groups;
}

const initialState = {
    group: initialGroup()
}

export const groupReducer = (state = initialState, action) => {
    switch(action.type) {
        case GROUP: {
            return {
                group:action.data
            };
        }
        default:
            return state;
    }
}