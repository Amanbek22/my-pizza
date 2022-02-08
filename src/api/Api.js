import axios from "axios";

const api = axios.create({
    baseURL: "https://61da936a4593510017aff59d.mockapi.io/pizza/",
})


export default {
    getAllPizzas: () => api.get("/pizzas"),
};