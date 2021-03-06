import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = ({ isModalOpen, dispatch }) => {
  return (
    <div className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button
          className='close-modal-btn'
          onClick={() => dispatch({ type: `TOGGLE_MODAL` })}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
