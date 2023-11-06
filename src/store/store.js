import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import dropdownSlice from './dropdownSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    dropdown: dropdownSlice,
  }
});

export default store;