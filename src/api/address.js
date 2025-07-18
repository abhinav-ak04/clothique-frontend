import axios from './axios';

export async function getUserAddresses(userId) {
  const response = await axios.get(`/addresses/user/${userId}`);
  console.log('dddddddddddd', response.data);
  return response.data;
}
