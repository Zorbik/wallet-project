import axios from 'axios';

const $publicHost = axios.create({
  baseURL: 'https://wallet.goit.ua/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: 'https://wallet.goit.ua/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  //   config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  config.headers[
    'Authorization'
  ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIzNTNlMTM0Ny02NTlkLTRlYTAtOTUzNi02MTA1MTNjODg3MTQiLCJpYXQiOjE2NzE1Mjc2MzQsImV4cCI6MTAwMDAwMDE2NzE1Mjc2MzR9.oGhGNZXYMpZ1VfHdI5MHKmj6lTS4RPn2seO08FIDaeY`;
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const addTransactionRequest = async transactionForm => {
  const { data } = await $privateHost.post(
    '/api/transactions',
    transactionForm
  );

  return data;
};

export const getTransactionRequest = async () => {
  const { data } = await $privateHost.get('/api/transactions');

  return data;
};

export const deleteTransactionRequest = async transactionId => {
  const { data } = await $privateHost.delete(
    `/api/transactions/${transactionId}`
  );

  return data;
};
