import axios from './axios';

export async function getProducts(userId) {
  const response = await axios.get(`/products/search/${userId}`);
  return response.data.items;
}

export async function getProductById(productId) {
  const response = await axios.get(`products/${productId}`);
  return response.data;
}
