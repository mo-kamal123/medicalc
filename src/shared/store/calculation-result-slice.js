import { createSlice } from '@reduxjs/toolkit';

const calculationResultSlice = createSlice({
  name: 'calculationResult',
  initialState: {},
  reducers: {
    addCalculationResult: (_, action) => {
      // Completely replaces state with the new payload
      return action.payload;
    },
    removeCalculationResult: () => {
      // Resets state to empty object
      return {};
    },
  },
});

export const { addCalculationResult, removeCalculationResult } =
  calculationResultSlice.actions;

export default calculationResultSlice.reducer;
