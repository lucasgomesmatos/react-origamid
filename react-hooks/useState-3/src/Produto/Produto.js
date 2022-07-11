import React from 'react'

const Produto = ({nome, fotos, preco}) => {
  return (
    <div>
      <p>{nome}</p>
      <p>R$ {preco}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  )
}

export default Produto