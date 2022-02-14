import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function createConfig(token) {
  return { headers: { Authorization: `JWT ${token}` } };
}

function signUp(body) {
  return axios.post(`${BASE_URL}/signup`, body);
}

function signIn(body) {
  return axios.post(`${BASE_URL}/signIn`, body);
}

function getProduct(productId) {
  return axios.get(`${BASE_URL}/product/${productId}`);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

export const services = {
  signUp,
  signIn,
  getProduct,
  getProducts
};
