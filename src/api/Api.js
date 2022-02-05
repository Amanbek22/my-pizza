import axios from "axios";

const api = axios.create({
    baseURL: "https://pizza-app-ulan.herokuapp.com/",
})


export default {
    getAllPizzas: () => api.get("getall/pizza"),
};