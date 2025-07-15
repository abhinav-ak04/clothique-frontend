import axios from './axios';

export async function searchProducts(queryString) {
  const response = await axios.get(`products/search?${queryString}`);
  return response.data;
}

export async function getProductById(productId) {
  const response = await axios.get(`products/${productId}`);
  return response.data;
}
