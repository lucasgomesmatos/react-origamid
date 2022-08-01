import React from 'react'

const Modal = ({modal, setModal}) => {
  return (
    <div style={{ margin: "1rem", background: "#2d2d2d", padding: "1rem" }}>
      {
        modal && <button onClick={() => setModal(false)}>Fechar</button> 
      }
    </div>
  )
}

export default Modal