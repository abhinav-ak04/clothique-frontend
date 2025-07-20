import axios from './axios';

export async function getUserData(userId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`user/get/${userId}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function isUserValid(mobileNo) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`user/exists?mobileNo=${mobileNo}`, {
    headers: { Authorization: token },
  });
  return response.data;
}

export async function updateUserData(userId, newData) {
  const token = localStorage.getItem('token');
  const response = await axios.patch(`user/update/${userId}`, newData, {
    headers: { Authorization: token },
  });
  return response.data;
}
