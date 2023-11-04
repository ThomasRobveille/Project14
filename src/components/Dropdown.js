import React, { useState } from 'react';

import "../stylesheet/Dropdown.css"

export default function Dropdown({data, type}) {
  const [departement, setDepartement] = useState('Choisir un département');

  const id = type + 'containerDropdown';
    const handleDropdown = () => {   
    let Dropdown = document.getElementById(id);
    Dropdown.classList.toggle('active');
  }

  return (
    <div id={id} className='containerDropdown'>
      <div className='dropdownSelected'>
        <p>{departement}</p>
        <span onClick={handleDropdown}>X</span>
      </div>
      {data.map((item, index) => (
        <p key={index} onClick={() => setDepartement(item.name)}>{item.name}</p>
      ))}
    </div>
  )
}