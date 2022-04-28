import {combineReducers,createStore} from 'redux';

import {userReducer} from '../reducers/user';
import {groupReducer} from '../reducers/group';
import { expenseReducer } from '../reducers/expense';

const reducer = combineReducers({
    user: userReducer,
    group: groupReducer,
    expense: expenseReducer
});

const initialState = {};
const store = createStore(reducer,initialState);

export default store;