import React, { useState, useEffect } from 'react';

import "../stylesheet/EmployeeList.css"

export default function EmployeeArray() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const employees = localStorage.getItem('employeeData');

    if(employees) {
      const data = JSON.parse(employees);
      console.log(data)
      setData(data);
    }
  }, []);

  const handleSearchBar = () => {
    let searchBar = document.getElementById('searchBar');
    if(searchBar.value.length > 3) {
      const employees = localStorage.getItem('employeeData');
      const data = JSON.parse(employees);
      const filteredData = data.filter((employee) => {
        return employee.firstname.toLowerCase().includes(searchBar.value.toLowerCase()) || employee.lastname.toLowerCase().includes(searchBar.value.toLowerCase()) || employee.adress.city.toLowerCase().includes(searchBar.value.toLowerCase()) || employee.adress.state.toLowerCase().includes(searchBar.value.toLowerCase()) || employee.adress.zip.toLowerCase().includes(searchBar.value.toLowerCase()) || employee.departement.toLowerCase().includes(searchBar.value.toLowerCase())
      })
      setData(filteredData);
    } else {
      const employees = localStorage.getItem('employeeData');
      const data = JSON.parse(employees);
      setData(data);
    }
  }

  const handlePagination = () => {
    let pagination = document.getElementById('pagination');
    const employees = localStorage.getItem('employeeData');
    const data = JSON.parse(employees);
    const paginatedData = data.slice(0, pagination.value);
    setData(paginatedData);
  }

  const handleSortBy = (type) => {
    const employees = localStorage.getItem('employeeData');
    const data = JSON.parse(employees);
    const sortedData = data.sort((a, b) => {
      if(a[type] < b[type]) { return -1; }
      if(a[type] > b[type]) { return 1; }
      return 0;
    })
    setData(sortedData);
  }


  return (
    <div className='containerEmployeeList'>
      <div className='searchtoolsEmployeeList'>
        <div>
          <label>Show : </label>
          <select id='pagination' onChange={handlePagination}>
            <option>1</option>
            <option>2</option>
            <option selected>3</option>
          </select>
        </div>        
        <div>
          <label htmlFor="searchBar">Search : </label>
          <input name="searchBar" id='searchBar' type='text' onChange={handleSearchBar}/>
        </div>
        
      </div>
      <ul className='arrayList arrayHeader'>
        <li onClick={() => handleSortBy('firstname')}>FirstName</li>
        <li onClick={() => handleSortBy('lastname')}>LastName</li>
        <li onClick={() => handleSortBy('startdate')}>StartDate</li>
        <li onClick={() => handleSortBy('department')}>Department</li>
        <li onClick={() => handleSortBy('dateofbirth')}>Date of birth</li>
        <li onClick={() => handleSortBy('street')}>Street</li>
        <li onClick={() => handleSortBy('city')}>City</li>
        <li onClick={() => handleSortBy('state')}>State</li>
        <li onClick={() => handleSortBy('zip')}>Zip</li>
      </ul>
      {
        data.map((employee, index) => (
          <ul className='arrayList' key={index}>
            <li>{employee.firstname}</li>
            <li>{employee.lastname}</li>
            <li>{employee.date_of_start}</li>
            <li>{employee.departement}</li>
            <li>{employee.date_of_birth}</li>
            <li>{employee.adress.street}</li>
            <li>{employee.adress.city}</li>
            <li>{employee.adress.state}</li>
            <li>{employee.adress.zip}</li>
          </ul>
        ))
      }
    </div>
  )
}
        
