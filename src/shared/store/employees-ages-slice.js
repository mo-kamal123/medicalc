import { createSlice } from '@reduxjs/toolkit';

const employeesAgeSlice = createSlice({
  name: 'employeesAges',
  initialState: {},
  reducers: {
    addEmployeesAges: (_, action) => {
      // Completely replaces state with the new payload
      return action.payload;
    },
    removeEmployeesAges: () => {
      // Resets state to empty object
      return {};
    },
  },
});

export const { addEmployeesAges, removeEmployeesAges } =
  employeesAgeSlice.actions;

export default employeesAgeSlice.reducer;
