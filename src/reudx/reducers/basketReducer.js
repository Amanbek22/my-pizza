import { ADD_PIZZA } from "../actionTypes.js";

const initialState = { 
    data: JSON.parse(localStorage.getItem("basket")) || null
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            return {...state, data: [...state.data, action.payload]}
        default:
            return state;
    }
}
