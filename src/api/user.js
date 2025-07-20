import axios from './axios';

const token = localStorage.getItem('token');

export async function getUserData(userId) {
  const response = await axios.get(`user/get/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function isUserValid(mobileNo) {
  const response = await axios.get(`user/exists?mobileNo=${mobileNo}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function updateUserData(userId, newData) {
  const response = await axios.patch(`user/update/${userId}`, newData, {
    headers: { Authorization: token },
  });
  return response.data;
}
