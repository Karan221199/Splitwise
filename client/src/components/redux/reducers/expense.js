import {EXPENSE,ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from '../action-types/type'

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
        case ADD_EXPENSE: {
            return {
                ...state,
                expense : [...state.expense, action.data]
            };
        }
        case UPDATE_EXPENSE: {
            const index = state.expense.findIndex(exp => exp._id == action.data._id);
            const newArray = [...state.expense];
            newArray[index] = action.data;
            return {
                ...state,
                expense : newArray
            };
        }
        case DELETE_EXPENSE: {
            return {  // returning a copy of orignal state
                ...state, //copying the original state
                expense: state.expense.filter(exp => exp._id !== action.data._id) // returns a new filtered array
            }
        }
        default:
            return state;
    }
}