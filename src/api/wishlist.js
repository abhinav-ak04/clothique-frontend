import axios from './axios';

export async function getWishlistItems(userId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`/wishlist/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data.items;
}

export async function removeWishlistItem({ userId, productId }) {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`/wishlist/remove-item`, {
    data: {
      userId,
      productId,
    },
    headers: { Authorization: token },
  });
  return response.data.wishlist.items;
}

export async function addToWishlist({ userId, productId }) {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    `/wishlist/add`,
    {
      userId,
      productId,
    },
    {
      headers: { Authorization: token },
    },
  );
  return response.data.wishlist.items;
}

export async function isInWishlist({ userId, productId }) {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    `/wishlist/exists?userId=${userId}&productId=${productId}`,
    {
      headers: { Authorization: token },
    },
  );
  return response.data;
}
