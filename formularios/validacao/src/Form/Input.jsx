import React from 'react';

const Input = ({
  type,
  id,
  label,
  pros,
  placeholder,
  value,
  setValue,
  handleOnBlur,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...pros}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        onBlur={handleOnBlur}
      />
    </>
  );
};

export default Input;
