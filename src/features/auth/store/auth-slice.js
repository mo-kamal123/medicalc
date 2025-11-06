import { createSlice } from '@reduxjs/toolkit';
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../../shared/utils/localStorage-actions';

const logged = getFromLocalStorage('loggedIn');
const location = getFromLocalStorage('location');
// auth-slice.js
const initialState = {
  loggedIn: logged || false,
  location: location || null, // Now an object like { latitude, longitude }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    log_in: (state) => {
      state.loggedIn = true;
      addToLocalStorage('loggedIn', true);
    },
    logout: (state) => {
      state.loggedIn = false;
      state.location = null;
      removeFromLocalStorage('loggedIn');
      removeFromLocalStorage('location');
    },
    getLocation: (state, action) => {
      state.location = action.payload; // { latitude, longitude }
      addToLocalStorage('location', action.payload);
    },
  },
});

export const { log_in, logout, getLocation } = authSlice.actions;
export default authSlice.reducer;
