import axios from './axios';

export async function getAllOrders(userId) {
  const response = await axios.get(`/orders/${userId}`);
  return response.data;
}

export async function placeOrder(order) {
  const response = await axios.post(`/orders/place`, order);
  return response.data;
}
