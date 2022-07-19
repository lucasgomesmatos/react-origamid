import React, { useState } from 'react'

const Select = () => {
  const [select, setSelect] = useState('');
  return (
    <>
      <select style={{ marginLeft: "1rem" }} value={select} onChange={({target}) => setSelect(target.value)}>
        <option disabled value=""></option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </>
  )
}

export default Select