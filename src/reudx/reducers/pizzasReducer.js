import { GET_ALL_PIZZAS } from "../actionTypes.js";


const initialState = {
  isLoading: true,
  data: null,
}

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PIZZAS:
      return { ...state, data: action.payload, isLoading: false }
    default:
      return state;
  }
}