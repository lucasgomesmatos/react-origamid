import React from 'react';

const Form = ({ label, id, value, setValue }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id="nome"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </>
  );
};

export default Form;
