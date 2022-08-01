import React from 'react'

const ButtonModal = ({setModal}) => {
  return (
    <button style={{ margin: "1rem" }} onClick={() => setModal(true)}>Clique</button>
  )
}

export default ButtonModal