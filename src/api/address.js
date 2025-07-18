import axios from './axios';

export async function getUserAddresses(userId) {
  const response = await axios.get(`/addresses/user/${userId}`);
  return response.data;
}

export async function getAddressById(addressId) {
  const response = await axios.get(`/addresses/${addressId}`);
  return response.data;
}
