import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/redux-persist-config';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee_list" element={<EmployeeList />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
