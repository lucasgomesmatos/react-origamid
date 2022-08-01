import React, { useRef, useState } from 'react'

export const Produto = () => {
  const [contador, setContador] = useState(0)
  const [notificacao, setNotificacao] = useState(null)
  const timeoutRef = useRef()

  function addItems() {
    setNotificacao("Item adicionado ao carrinho")
    clearInterval(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 2000)
    setContador( contador + 1)
  }

  return (
    <div style={{ marginTop: "4rem" }}>
      <p>{notificacao}</p>
      <button onClick={addItems} >Adicionar ao Carrinho {contador}</button>
    </div>
  )
}
