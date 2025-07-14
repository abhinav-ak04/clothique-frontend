import axios from './axios';

export async function getCartItems(userId) {
  const response = await axios.get(`/cart/${userId}`);
  return response.data.items;
}

export async function addToCart({ userId, productId, quantity, size }) {
  const response = await axios.post(`/cart/add`, {
    userId,
    productId,
    quantity,
    size,
  });
  return response.data.cart;
}

export async function removeCartItem({ userId, productId, size }) {
  const response = await axios.delete(`/cart/remove-item`, {
    data: {
      userId,
      productId,
      size,
    },
  });
  return response.data.cart.items;
}
