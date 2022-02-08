import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer.js';
import { basketReducer } from './reducers/basketReducer.js';

export const store = createStore(combineReducers({
    auth: authReducer,
    basket: basketReducer
}));

window.store = store;