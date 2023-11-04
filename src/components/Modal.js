import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';

import '../stylesheet/Modal.css'

function Modal() {
  const isOpen = useSelector(state => state.modal.open);

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
            <p>Bonjour je suis une modal</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;