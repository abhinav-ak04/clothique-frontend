import axios from './axios';

const token = localStorage.getItem('token');

export async function getCartItems(userId) {
  const response = await axios.get(`/cart/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data.items;
}

export async function addToCart({ userId, productId, quantity, size }) {
  const response = await axios.post(
    `/cart/add`,
    {
      userId,
      productId,
      quantity,
      size,
    },
    {
      headers: { Authorization: token },
    },
  );
  return response.data.cart;
}

export async function removeCartItem({ userId, productId, size }) {
  const response = await axios.delete(`/cart/remove-item`, {
    data: {
      userId,
      productId,
      size,
    },
    headers: { Authorization: token },
  });
  return response.data.cart.items;
}
