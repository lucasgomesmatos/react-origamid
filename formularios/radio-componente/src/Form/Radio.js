import React from 'react';

const Radio = ({ options, radio, setRadio, ...pros }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={radio === option}
            onChange={({ target }) => setRadio(target.value)}
            {...pros}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
