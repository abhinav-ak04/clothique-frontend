import axios from './axios';

export async function getAllOrders(userId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`/orders/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function placeOrder(order) {
  const token = localStorage.getItem('token');
  const response = await axios.post(`/orders/place`, order, {
    headers: { Authorization: token },
  });
  return response.data;
}
