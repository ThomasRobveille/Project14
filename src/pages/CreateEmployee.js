import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

import Header from '../components/Header';
import FormNewEmployee from '../components/FormNewEmployee';
import Modal from 'plugin_modal_p14';

export default function CreateEmployee() {
  return (
    <Provider store={store}>
      <Header/>
      <FormNewEmployee/>
      <Modal text={"Utilisateur créer avec succès"}/>
    </Provider>
  )
}