import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: {
    open: false,
    text: '',
  }
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.modal.open = true;
    },
    closeModal(state) {
      state.modal.open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;