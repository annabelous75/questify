import axios from 'axios';
import { infoToast } from '../../components/Toasts';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://questify-backend.goit.global/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/register', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    infoToast('The user is alredy registered');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    infoToast('Incorrect login or password');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      console.log(thunkAPI.getState());
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken; // Припускаю, що refreshToken є в стані
  
      if (!refreshToken) {
        console.log('!refreshToken');
        return thunkAPI.rejectWithValue();
      }
  
      try {
        const { data } = await axios.post('/auth/refresh', { refreshToken });
        console.log(data);
  
        // Оновити токени у сторі
        token.set(data.newAccessToken); // Новий токен
        // data.newRefreshToken - новий refreshToken, якщо ви отримуєте його від сервера
  
        return data;
      } catch (error) {
        console.log(error.message);
        return thunkAPI.rejectWithValue();
      }
    }
  );
  

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;