import React from 'react';

const Select = ({ options, value, setValue, ...pros }) => {
  return (
    <select
      style={{ marginBottom: '1rem' }}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...pros}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
