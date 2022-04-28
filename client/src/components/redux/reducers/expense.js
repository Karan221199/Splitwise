import {EXPENSE} from '../action-types/type'

const initialExpense = () => {
    const expenses = [];
    return expenses;
}

const initialState = {
    expense : initialExpense()
}

export const expenseReducer = (state=initialState,action)=>{
    switch(action.type) {
        case EXPENSE: {
            return {
                expense: action.data
            };
        }
        default:
            return state;
    }
}