import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

import Header from '../components/Header';
import FormNewEmployee from '../components/FormNewEmployee';
import Modal from '../components/Modal';

export default function CreateEmployee() {
  return (
    <Provider store={store}>
      <Header/>
      <FormNewEmployee/>
      <Modal/>
    </Provider>
  )
}