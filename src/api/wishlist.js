import axios from './axios';

export async function getWishlistItems(userId) {
  const response = await axios.get(`/wishlist/${userId}`);
  return response.data.items;
}

export async function removeWishlistItem({ userId, productId }) {
  const response = await axios.delete(`/wishlist/remove-item`, {
    data: {
      userId,
      productId,
    },
  });
  return response.data.wishlist.items;
}

export async function addToWishlist({ userId, productId }) {
  const response = await axios.post(`/wishlist/add`, {
    userId,
    productId,
  });
  return response.data.wishlist.items;
}
