import React, { useRef } from 'react';

import EmployeeArray from '../components/EmployeeArray';

export default function EmployeeList() {
  return (
    <div>
      <header>
        <h1>Employee List</h1>
        <a href='/'>Create Employee</a>
      </header>
      <EmployeeArray/>
    </div>
  )
}