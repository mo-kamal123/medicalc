import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: {},
  reducers: {
    addClientData: (action) => {
      return action.payload; // replaces state entirely
    },
    removeClientData: () => {
      return {}; // resets to empty
    },
  },
});

export const { addClientData, removeClientData } = clientSlice.actions;

export default clientSlice.reducer;
