import axios from './axios';

export async function handleSignup(mobileNo, password) {
  const response = await axios.post('/auth/signup', { mobileNo, password });
  return response.data;
}

export async function handleLogin(mobileNo, password) {
  const response = await axios.post('/auth/login', { mobileNo, password });
  return response.data;
}
