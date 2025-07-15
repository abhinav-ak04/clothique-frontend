import axios from './axios';

export async function getUserData(userId) {
  const response = await axios.get(`user/get/${userId}`);
  // console.log('awawawawaw', response.data.user);
  return response.data;
}
