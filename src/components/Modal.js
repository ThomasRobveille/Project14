import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';

import '../stylesheet/Modal.css'

function Modal() {
  const isOpen = useSelector(state => state.modal.modal.open);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      {isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => handleCloseModal()}>&times;</span>
            <p>Utilisateur créer avec succès</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;