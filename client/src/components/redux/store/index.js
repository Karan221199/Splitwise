import {combineReducers,createStore} from 'redux';

import {userReducer} from '../reducers/user';

const reducer = combineReducers({
    user: userReducer
});

const initialState = {};
const store = createStore(reducer,initialState);

export default store;