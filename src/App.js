import React  from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee_list" element={<EmployeeList />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
