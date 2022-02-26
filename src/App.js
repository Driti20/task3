import React, { useState } from 'react';
import BackgraundDrop from './comonents/BackgraundDrop'
import "./App.css";
import Modal from "./comonents/Modal";



function App() {
  const [openModal, setOpenModal]=useState(false);
  function open() {
    setOpenModal(true);
  }
  function close() {
    setOpenModal(false);
  }

  return (
    <div className="App">
      <div className="popUpBtn" onClick={open}>show popup</div>
      
      {openModal && <Modal onClose={close} />}
      {openModal && <BackgraundDrop onClose={close} />}
    </div>
  );
}

export default App;
