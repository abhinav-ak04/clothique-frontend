import axios from './axios';

const token = localStorage.getItem('token');

export async function getAllOrders(userId) {
  const response = await axios.get(`/orders/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function placeOrder(order) {
  const response = await axios.post(`/orders/place`, order, {
    headers: { Authorization: token },
  });
  return response.data;
}
