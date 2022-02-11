import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return { headers: { Authorization: `JWT ${token}` } };
}

function getProducts() {
    return axios.get(`${BASE_URL}/products`);
}

export{
    getProducts
}