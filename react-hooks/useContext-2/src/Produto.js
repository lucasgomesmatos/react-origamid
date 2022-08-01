import React, { useContext } from 'react'
import { GlobalContext, GlobalStorage } from './GlogalContext'

const Produto = () => {
  const global = useContext(GlobalContext)

  if(global.produto === null) return null
  return (
    <div>
      {global.produto.map(produto => (
        <p key={produto.id}>{produto.nome}</p>
      ))}

      {console.log(global.produto)}
    </div>
  )
}

export default Produto