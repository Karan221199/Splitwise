import {combineReducers,createStore} from 'redux';

import {userReducer} from '../reducers/user';
import {groupReducer} from '../reducers/group';

const reducer = combineReducers({
    user: userReducer,
    group: groupReducer
});

const initialState = {};
const store = createStore(reducer,initialState);

export default store;