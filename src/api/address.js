import axios from './axios';

export async function getUserAddresses(userId) {
  const response = await axios.get(`/addresses/user/${userId}`);
  return response.data;
}

export async function getAddressById(addressId) {
  const response = await axios.get(`/addresses/${addressId}`);
  return response.data;
}

export async function setAddressDefault(addressId, userId) {
  const response = await axios.patch(`/addresses/${addressId}/set-default`, {
    userId,
  });
  return response.data;
}

export async function addAddress(newAddress) {
  const response = await axios.post('/addresses/add', newAddress);
  return response.data;
}
