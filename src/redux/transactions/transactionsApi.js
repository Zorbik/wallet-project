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
  ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1ZTg1ODYyZC1iNmEwLTRkYjMtODg4Yi1mODRiMmYxN2Y0NjkiLCJpYXQiOjE2NzE0NTM2MjksImV4cCI6MTAwMDAwMDE2NzE0NTM2Mjh9.v-mFGHReASMMkIb8zISOJlXqMBfObBMlZvvSos52ciM`;
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const getTransactionCategories = async () => {
  const { data } = await $privateHost.get('api/transaction-categories');

  return data;
};

// export const addContactRequest = async contact => {
//   const { data } = await $privateHost.post('contacts', contact);

//   return data;
// };

// export const deleteContactRequest = async contactId => {
//   const { data } = await $privateHost.delete(`contacts/${contactId}`);

//   return data;
// };
