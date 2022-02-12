import axios from "axios";

const api = axios.create({
    baseURL: "https://605b21f027f0050017c063b9.mockapi.io/api/v2/",
})


export default {
    getAllPizzas: () => api.get("/pizza"),
};