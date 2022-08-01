import React, { useRef, useState } from "react";
import { Produto } from "./Produto/Produto";

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState("");

  const inputElement = useRef("");

  const addItems = () => {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  };

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        ref={inputElement}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={addItems}>Adicionar</button>

      <br/>
      <Produto/>
    </div>
  );
};

export default App;
