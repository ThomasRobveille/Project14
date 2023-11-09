import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeState, changeDepartment } from '../store/dropdownSlice';

import "../stylesheet/Dropdown.css"
import dropdownIcon from '../assets/icon/dropdownIcon.png';

export default function Dropdown({data, type}) {
  const [departement, setDepartement] = useState('Choisir un département');

  const id = type + 'containerDropdown';
  const handleDropdown = () => {   
    let Dropdown = document.getElementById(id);
    Dropdown.classList.toggle('active');
  }

  const dispatch = useDispatch();

  const handleDropdownChange = (item) => {
    if (type === 'state') {
      dispatch(changeState(item));
    } else {
      dispatch(changeDepartment(item));
    }    
    setDepartement(item);
    handleDropdown();
  }

  return (
    <div id={id} className='containerDropdown'>
      <div className='dropdownSelected'>
        <p>{departement}</p>
        <span onClick={handleDropdown}><img className='dropdownIcon' alt="flèche dropdown" src={dropdownIcon}/></span>
      </div>
      {data.map((item, index) => (
        <p className='optionDropdown' key={index} onClick={() => handleDropdownChange(item.name)}>{item.name}</p>
      ))}
    </div>
  )
}