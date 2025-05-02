import axios from 'axios';
import { BASE_URL } from '../config/api';

export async function getProducts() {
	return axios.get(`${BASE_URL}/products`);
}

export async function getProductsByCategory(categoryId) {
	return axios.get(`${BASE_URL}/products/category/${categoryId}`);
}

export async function getProductById(itemId) {
	return axios.get(`${BASE_URL}/products/${itemId}`);
}