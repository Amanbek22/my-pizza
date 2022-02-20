import { GET_ALL_PIZZAS } from "../actionTypes.js";
import Api from "../../api/Api.js"

export const getAllPizzas = (payload) => ({
  type: GET_ALL_PIZZAS,
  payload
})

export const getAllPizzaAsync = () => {
  return (dispatch) => {
    Api.getAllPizzas()
      .then((res) => {
        // Pizza Data 
        dispatch(getAllPizzas(res.data))
      })
      .catch((error) => console.log(error))
  }
}