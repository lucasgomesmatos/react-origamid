import React, { useState } from "react";

const Radio = () => {
  const [radio, setRadio] = useState("");
  return (
    <>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === "notebook"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Notebook
      </label>
      {radio}
    </>
  );
};

export default Radio;
