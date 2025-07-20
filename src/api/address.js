import axios from './axios';

const token = localStorage.getItem('token');

export async function getUserAddresses(userId) {
  const response = await axios.get(`/addresses/user/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function getAddressById(addressId) {
  const response = await axios.get(`/addresses/${addressId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function setAddressDefault(addressId, userId) {
  const response = await axios.patch(
    `/addresses/${addressId}/set-default`,
    {
      userId,
    },
    {
      headers: { Authorization: token },
    },
  );
  return response.data;
}

export async function addAddress(newAddress) {
  const response = await axios.post('/addresses/add', newAddress, {
    headers: { Authorization: token },
  });
  return response.data;
}
