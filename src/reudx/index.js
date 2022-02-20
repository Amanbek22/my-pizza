import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './reducers/authReducer.js';
import { basketReducer } from './reducers/basketReducer.js';
import { pizzasReducer } from './reducers/pizzasReducer.js';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    basket: basketReducer,
    pizza: pizzasReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;