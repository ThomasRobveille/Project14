import React, { useState, useEffect } from 'react';

import "../stylesheet/EmployeeList.css"

/**
 * Composant pour afficher une liste paginée et triable des employés.
 * @component
 */

export default function EmployeeArray() {
  /**
   * État pour stocker les données des employés.
   * @type {Array}
   */

  const [data, setData] = useState([]);

  /**
   * État pour stocker le nombre total de pages.
   * @type {Array}
   */
  const [totalPages, setTotalPages] = useState([]);

  /**
   * État pour stocker la page actuelle.
   * @type {number}
   */
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * État pour stocker le nombre d'employés par page.
   * @type {number}
   */
  const [employeesPerPage, setEmployeesPerPage] = useState(5); // [5, 10, 15]

  /**
   * État pour stocker le nombre total d'employés.
   * @type {number}
   */
  const [totalEmployees, setTotalEmployees] = useState(0);

  /**
   * Effet pour initialiser la page lors du chargement du composant.
   * @function
   */
  useEffect(() => {
    handlePage(currentPage, employeesPerPage)
  }, []);

  /**
   * Effet pour mettre à jour le nombre total d'employés lors du chargement du composant.
   * @function
   */
  useEffect(() => {
    const totalEmployees = localStorage.getItem('employeeData');
    setTotalEmployees(totalEmployees.length);
  }, []);

  /**
   * Gère la barre de recherche des employés.
   * @function
   */
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

  /**
   * Gère la pagination en changeant le nombre d'employés par page.
   * @function
   */
  const handlePagination = () => {
    let pagination = document.getElementById('pagination');
    setEmployeesPerPage(parseInt(pagination.value));
    handlePage(currentPage, parseInt(pagination.value));
  }

    /**
   * Gère le changement de page.
   * @function
   * @param {number} page - Numéro de la page à afficher.
   * @param {number} perPage - Nombre d'employés par page.
   */
  const handlePage = (page, perPage) => {
    const employees = localStorage.getItem('employeeData');
    const data = JSON.parse(employees);
    let startRange = perPage * (page - 1);
    let endRange = startRange + perPage;
    const paginatedData = data.slice(startRange , endRange);
    setData(paginatedData);
    let totalPages = Math.ceil(data.length / 5);
    let pages = Array.from({length: totalPages}, (v, i) => i + 1);
    setTotalPages(pages);
    setCurrentPage(page);
  }

  const previousPage = () => {
    if(currentPage === 1) return;
    const employees = localStorage.getItem('employeeData');
    const data = JSON.parse(employees);
    let startRange = employeesPerPage * (currentPage - 2);
    let endRange = startRange + 5;
    const paginatedData = data.slice(startRange , endRange);
    setData(paginatedData);
    setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    if(currentPage === totalPages.length) return;
    const employees = localStorage.getItem('employeeData');
    const data = JSON.parse(employees);
    let startRange = employeesPerPage * (currentPage);
    let endRange = startRange + 5;
    const paginatedData = data.slice(startRange , endRange);
    setData(paginatedData);
    setCurrentPage(currentPage + 1);
  }

  /**
   * Gère le tri des employés en fonction d'un type spécifié.
   * @function
   * @param {string} type - Type de tri (par exemple, 'street', 'city', 'state', 'zip').
   */
  const handleSortBy = (type) => {
    if(type === "street" || type === "city" || type === "state" || type === "zip") {
      const employees = localStorage.getItem('employeeData');
      const data = JSON.parse(employees);
      const dataToBeSort = data.sort((a, b) => {
        if(a.adress[type] > b.adress[type]) return 1;
        if(a.adress[type] < b.adress[type]) return -1;
        return 0;
      })
      setData(dataToBeSort);
      return;
    } else if(type === "date_of_birth" || type === "date_of_start") {
      const employees = localStorage.getItem('employeeData');
      const data = JSON.parse(employees);
      const dataToBeSort = data.sort((a, b) => {
        if(a[type] > b[type]) return 1;
        if(a[type] < b[type]) return -1;
        return 0;
      })
      setData(dataToBeSort);
      return;
    } else {
      const employees = localStorage.getItem('employeeData');
      const data = JSON.parse(employees);
      const dataToBeSort = data.sort((a, b) => {
        if(a[type] > b[type]) return 1;
        if(a[type] < b[type]) return -1;
        return 0;
      })
      setData(dataToBeSort);
    }
  }


  return (
    <div className='containerEmployeeList'>
      <div className='searchtoolsEmployeeList'>
        <div>
          <label>Show : </label>
          <select id='pagination' onChange={() => handlePagination()} defaultValue={5}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
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
      <div className='pagination'>
        <p>Showing {currentPage} of {totalPages.length} of {totalEmployees} entries</p>
        <div>
          <button onClick={() => previousPage()}>Previous</button>
          {
            totalPages.map((page, index) => (
              <button onClick={() => handlePage(page, employeesPerPage)} key={index}>{page}</button>
            ))
          }
          <button onClick={() => nextPage()}>Next</button>
        </div>
      </div>
    </div>
  )
}
        
