import { EXPENSE, USER } from "../action-types/type";
import { CLEAR } from "../action-types/type";
import { GROUP, ADD_GROUP, ADD_EXPENSE,DELETE_EXPENSE,UPDATE_EXPENSE } from "../action-types/type";

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

export const setGroup = (data) => {
    return{
        type: GROUP,
        data,
    };
};

export const setExpense = (data) => {
    return {
        type: EXPENSE,
        data,
    }
}

export const addGroup = (data) => {
    return {
        type: ADD_GROUP,
        data,
    }
}

export const addExpense = (data) => {
    return {
        type: ADD_EXPENSE,
        data,
    }
}

export const DeleteExpense = (data) => {
    return {
        type: DELETE_EXPENSE,
        data,
    }
}

export const updateExpense = (data) => {
    return {
        type: UPDATE_EXPENSE,
        data,
    }
}