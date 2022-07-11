import React, { useState } from "react";
import ButtonModal from "./ButtonModal/ButtonModal";
import Modal from "./Modal/Modal";

const App = () => {
  const [modal, setModal] = useState(false);

  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(["item 1"]);

  const handleClick = () => {
    setContar(contar + 1)
    setItems([...items, `item ${contar + 1}`])
  }

  return (
    <div>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <ButtonModal setModal={setModal} />

      <div>
        <button onClick={handleClick}>{contar}</button>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
