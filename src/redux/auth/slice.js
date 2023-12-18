import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: {
    email: null,
    id: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(authOperations.register.fulfilled, (state, action) => {
      const email = action.payload?.email;
      const id = action.payload?.id;
      const token = action.payload?.token;
    
      if (email && id && token) {
        state.user = { email, id };
        state.token = token;
        state.isLoggedIn = true;
      } else {
        
        console.error('Invalid payload structure:', action.payload);
      }
    })
    
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export default authReducer;
