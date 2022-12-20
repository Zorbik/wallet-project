import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://wallet.goit.ua/api';

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
      const { data } = await axios.post('/auth/sign-up', newUserData);
      console.log('data', data);
      token.set(data.token);
      toast.success(`Реєстрація пройшла успішно!`);

      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'userAuth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/sign-in', userData);
      console.log('data', data);

      token.set(data.token);

      toast.success(`Вхід виконан успішно!`);

      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'userAuth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('/auth/sign-out');
      token.unset();

      toast.success(`До скорої зустрічі!`);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'userAuth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().userData.token;
    if (!persistedToken) return rejectWithValue('Bearer auth failed');
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log('data', data);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
