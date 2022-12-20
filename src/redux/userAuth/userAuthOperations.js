import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://wallet.goit.ua/';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const createNewUser = createAsyncThunk(
  'userAuth/register',
  async (newUserData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/sign-up', newUserData);
      console.log(response);
      //   token.set(data.token);
      toast.success(`Реєстрація пройшла успішно!`);

      //   return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 400:
          return rejectWithValue('Validation error');
        case 409:
          return rejectWithValue('User with such email already exists');

        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const logInUser = createAsyncThunk(
  'userAuth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/sign-in', userData);
      console.log('response', response);

      //   token.set(data.token);

      //   toast.success(`Вхід виконан успішно!`);

      //   return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 400:
          return rejectWithValue('Validation error');
        case 403:
          return rejectWithValue('Provided password is incorrect');

        case 404:
          return rejectWithValue('User with such email not found');

        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const logOut = createAsyncThunk(
  'userAuth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('/api/auth/sign-out');
      token.unset();

      //   toast.success(`До скорої зустрічі!`);
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue('Bearer auth failed');
        default:
          return rejectWithValue(message);
      }
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'userAuth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().user.token;
    if (!persistedToken) return rejectWithValue('Bearer auth failed');
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch ({ response, message }) {
      switch (response.status) {
        case 401:
          return rejectWithValue('Bearer auth failed');
        default:
          return rejectWithValue(message);
      }
    }
  }
);
