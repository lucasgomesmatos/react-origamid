import React, { useState } from "react";

const App = () => {
  const [select, setSelect] = useState("");

  return (
    <form>
      <select value={select} onChange={({target}) => setSelect(target.value)}>
        <option disabled value=""></option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
