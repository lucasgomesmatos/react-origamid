import React from 'react'

const ButtonModal = ({setModal}) => {
  function handleClick() {
    setModal((ativo) => !ativo)
  }

  return (
    <button style={{ margin: "1rem" }} onClick={handleClick}>Clique</button>
  )
}

export default ButtonModal