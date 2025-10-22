import { createSlice } from "@reduxjs/toolkit";

// auth-slice.js
const initialState = {
  loggedIn: false,
  location: null, // Now an object like { latitude, longitude }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.location = null;
    },
    getLocation: (state, action) => {
      state.location = action.payload; // { latitude, longitude }
    },
    removeLocation: (state) => {
      state.location = null;
    },
  },
});

export const { login, logout, getLocation, removeLocation } = authSlice.actions;
export default authSlice.reducer;
