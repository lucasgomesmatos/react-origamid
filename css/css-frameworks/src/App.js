import Modal from './Modal/Modal';
import React, { useState } from 'react';

const App = () => {
  const [ativo, setAtivo] = useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-primary m-4"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Abrir modal
      </button>
      <Modal />
    </div>
  );
};

export default App;
