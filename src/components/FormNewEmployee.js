import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../store/modalSlice';

import statesData from '../data/states.json';

import Dropdown from './Dropdown';

import DatePicker from 'react-date-picker';

import "../stylesheet/FormNewEmployee.css"
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function FormNewEmployee() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [selectedDateofBirth, setSelectedDateofBirth] = useState(new Date());
  const [selectedDateofStart, setSelectedDateofStart] = useState(new Date());
  const state = useSelector(state => state.dropdown.infoDropdown.state);
  const departement = useSelector(state => state.dropdown.infoDropdown.department);

  useEffect(() => {
    let containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'none';
  }, []);

  const openModal = () => {
    let containerModal = document.getElementById('containerModal');
    containerModal.style.display = 'block';
  }

  const handleDateofBirthChange = (date) => {
    setSelectedDateofBirth(date);
  };

  const handleDateofStartChange = (date) => {
    setSelectedDateofStart(date);
  };

  const salesData = [
    {"name": "Marketing"},
    {"name": "Sales"},
    {"name": "Engineering"},
    {"name": "Human Resources"},
    {"name": "Legal"},
  ]

  const handleInputChange = (e, date) => {
    const inputName = e.target.name;
    switch(inputName) {
    case 'firstname':
      setFirstname(e.target.value);
      break;
    case 'lastname':
      setLastname(e.target.value);
      break;
    case 'street':
      setStreet(e.target.value);
      break;
    case 'city':
      setCity(e.target.value);
      break;
    case 'zip':
      setZip(e.target.value);
      break;
    default:
      break;
    }
  }

  const saveNewEmployee = () => {   
    if(firstname === '' || lastname === '' || street === '' || city === '' || zip === '' || state === 'Choisir un état' || departement === 'Choisir un département') {
      alert('Veuillez remplir tous les champs');
      return;
    }
    const newEmployee = {
      firstname: firstname,
      lastname: lastname,
      date_of_birth: selectedDateofBirth,
      date_of_start: selectedDateofStart,
      adress: {
        street: street,
        city: city,
        state: state,
        zip: zip,
      },
      departement: departement,
    }
    
    /* CODE TEMPORAIRE - A RETIRER SUR PROD */
    let employeeData = [];
    if (localStorage.getItem('employeeData')) {
      employeeData = JSON.parse(localStorage.getItem('employeeData'));
    } else {
      employeeData = [];
    }
    employeeData.push(newEmployee);
    localStorage.setItem('employeeData', JSON.stringify(employeeData));
    /* FIN CODE TEMPORAIRE */    

    handleOpenModal();
  }

  const handleOpenModal = () => {
    return openModal();
  }

  return (
    <div className='containerFormNewEmployee'>
      <form>
        <label>Firstname</label>
        <input type="text" name="firstname" className='inputFormNewEmployee' onChange={handleInputChange}/>
        <label>Lastname</label>
        <input type="text" name="lastname" className='inputFormNewEmployee' onChange={handleInputChange}/>
        <label>Date of birth</label>
        <DatePicker name='date_of_birth' onChange={handleDateofBirthChange} value={selectedDateofBirth} />
        <label>Date of start</label>
        <DatePicker name='date_of_start' onChange={handleDateofStartChange} value={selectedDateofStart} />
        <div className='formAdress'>
          <h2>Adress</h2>
          <label>Street</label>
          <input type="text" name="street" className='inputFormNewEmployee' onChange={handleInputChange}/>
          <label>City</label>
          <input type="text" name="city" className='inputFormNewEmployee' onChange={handleInputChange}/>
          <label>State</label>
          <Dropdown data={statesData} type={"state"}/>
          <label>Zip</label>
          <input type="text" name="zip" className='inputFormNewEmployee' onChange={handleInputChange}/>
        </div>
        <label>Departement</label>
        <Dropdown data={salesData} type={"departement"}/>
      </form>
      <button className='submitBtnFormNewEmployee' onClick={() => saveNewEmployee()}>SAVE</button>
    </div>
  )
}