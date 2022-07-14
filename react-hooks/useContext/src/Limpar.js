import React, { useContext } from 'react'
import { GlobalStorage } from './GlobalContext'

const Limpar = () => {
  const {limpaDados} = useContext(GlobalStorage)

  return (
    <button onClick={limpaDados}>Limpar</button>
  )
}

export default Limpar