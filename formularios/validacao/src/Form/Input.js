import React from 'react';

const Input = ({
  id,
  type,
  label,
  onChange,
  value,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label.toUpperCase()}</label>
      <input
        type={type}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
      />
      <div>{error}</div>
    </>
  );
};

export default Input;
