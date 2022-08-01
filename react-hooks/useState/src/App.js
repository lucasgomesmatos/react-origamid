import React, { useState } from "react";
import ButtonModal from "./ButtonModal/ButtonModal";
import Modal from "./Modal/Modal";

const App = () => {

  const [modal, setModal] = useState(false)
  
  return (
    <div>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      {modal && <Modal modal={modal} setModal={setModal}/>}
      <ButtonModal setModal={setModal}/>
    </div>
  );
};

export default App;
