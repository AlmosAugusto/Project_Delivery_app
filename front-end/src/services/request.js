import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
});

// esperando o back para confirmar se é preciso usar as {}
const requestRegister = async () => {
  const { data } = await API.post(url, body);
  return data;
};

export const signIn = async (url, body) => {
  const { data } = await API.post(url, body);
  return data;
};

export default requestRegister;
