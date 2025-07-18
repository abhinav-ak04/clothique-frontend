import axios from './axios';

export async function getAllOrders(userId) {
  const response = await axios.get(`/orders/${userId}`);
  return response.data;
}
