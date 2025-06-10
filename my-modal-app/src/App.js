import React, { useRef } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App; 