import React, { useState } from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const App = () => {
  const [cores, setCor] = useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCor([...cores, target.value]);
    } else {
      setCor(cores.filter((cor) => cor !== target.value));
    }
  }

  function isCheck(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={isCheck(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default App;
