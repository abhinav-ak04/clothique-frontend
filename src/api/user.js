import axios from './axios';

export async function getUserData(userId) {
  const response = await axios.get(`user/get/${userId}`);
  return response.data;
}

export async function updateUserData(userId, newData) {
  const response = await axios.patch(`user/update/${userId}`, newData);
  return response.data;
}
