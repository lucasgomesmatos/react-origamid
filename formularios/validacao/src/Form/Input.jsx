import React from 'react';

const Input = ({ type, label, ...pros }) => {
  return (
    <form>
      <label htmlFor={label}>{label.toUpperCase()}</label>
      <input type={type} name={label} {...pros} />
    </form>
  );
};

export default Input;
