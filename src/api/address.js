import axios from './axios';

export async function getUserAddresses(userId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`/addresses/user/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function getAddressById(addressId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`/addresses/${addressId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function setAddressDefault(addressId, userId) {
  const token = localStorage.getItem('token');
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
  const token = localStorage.getItem('token');
  const response = await axios.post('/addresses/add', newAddress, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function removeAddress(addressId) {
  const token = localStorage.getItem('token');
  const response = await axios.delete(`/addresses/remove/${addressId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}
