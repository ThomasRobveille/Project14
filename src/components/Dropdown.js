import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeState, changeDepartment } from '../store/dropdownSlice';

import "../stylesheet/Dropdown.css"
import dropdownIcon from '../assets/icon/dropdownIcon.png';


/**
 * Composant Dropdown réutilisable pour afficher une liste d'options.
 * @component
 * @param {Object} props - Propriétés du composant.
 * @param {Array} props.data - Tableau de données à afficher dans le dropdown.
 * @param {string} props.type - Type de dropdown ('state' ou 'departement').
 */
export default function Dropdown({data, type}) {
  /**
   * État pour stocker la valeur sélectionnée dans le dropdown.
   * @type {string}
   */
  const [departement, setDepartement] = useState('Choisir un département');

  /**
   * ID du container du dropdown.
   * @type {string}
   */
  const id = type + 'containerDropdown';

  /**
   * Gère l'ouverture/fermeture du dropdown.
   * @function
   */
  const handleDropdown = () => {   
    let Dropdown = document.getElementById(id);
    Dropdown.classList.toggle('active');
    let dropdownOptions = document.getElementsByClassName('optionDropdown');
    for(let i = 0; i < dropdownOptions.length; i++) {
      dropdownOptions[i].classList.toggle('activeOption');
    }
  }

  /**
   * Dispatch une action Redux pour changer l'état ou le département.
   * @function
   * @param {string} item - Valeur sélectionnée dans le dropdown.
   */
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