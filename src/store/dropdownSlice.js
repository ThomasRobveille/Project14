import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  infoDropdown: {
    states: '',
    department: 'test',
  }
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    changeState(state, action) {
      state.infoDropdown.state = action.payload;
    },
    changeDepartment(state, action) {
      state.infoDropdown.department = action.payload;
    },
  },
});

export const { changeState, changeDepartment } = dropdownSlice.actions;
export default dropdownSlice.reducer;