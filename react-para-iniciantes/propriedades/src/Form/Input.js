import React from "react";

const Input = ({label, id, ...pros}) => {
  return (
    <div style={{ margin:  "1rem 0rem"}} >
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...pros}/>
    </div>
  );
};

export default Input;
