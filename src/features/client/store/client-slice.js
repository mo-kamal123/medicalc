import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: {},
  reducers: {
    addClientData: (_, action) => {
      // Completely replaces state with the new payload
      return action.payload;
    },
    updateClientData: (state, action) => {
      // Merges the new data into the existing state
      // Example: dispatch(updateClientData({ email: "new@example.com" }))
      return {
        ...state,
        ...action.payload,
      };
    },
    removeClientData: () => {
      // Resets state to empty object
      return {};
    },
  },
});

export const { addClientData, updateClientData, removeClientData } =
  clientSlice.actions;

export default clientSlice.reducer;
