import React from 'react';

import "../stylesheet/EmployeeList.css"

export default function EmployeeArray() {
  const data = [
    {
      firstName: 'John',
      lastName: 'Smith',
      startDate: '01/01/2020',
      department: 'Sales',
      dateOfBirth: '01/01/1990',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      startDate: '01/01/2020',
      department: 'Sales',
      dateOfBirth: '01/01/1990',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  ]

  return (
    <div className='containerEmployeeList'>
      <ul className='arrayList arrayHeader'>
        <li>FirstName</li>
        <li>LastName</li>
        <li>StartDate</li>
        <li>Department</li>
        <li>Date of birth</li>
        <li>Street</li>
        <li>City</li>
        <li>State</li>
        <li>Zip</li>
      </ul>
      {
        data.map((employee, index) => (
          <ul className='arrayList arrayEmployee' key={index}>
            <li>{employee.firstName}</li>
            <li>{employee.lastName}</li>
            <li>{employee.startDate}</li>
            <li>{employee.department}</li>
            <li>{employee.dateOfBirth}</li>
            <li>{employee.street}</li>
            <li>{employee.city}</li>
            <li>{employee.state}</li>
            <li>{employee.zip}</li>
          </ul>
        ))
      }
    </div>
  )
}