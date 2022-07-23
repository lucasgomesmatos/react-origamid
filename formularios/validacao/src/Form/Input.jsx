import React from 'react';

const Input = ({ id, label, onChange, onBlur, ...pros }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...pros} onChange={onChange} onBlur={onBlur} />
    </>
  );
};

export default Input;
