import React from 'react'

const Produto = ({nome, propriedades}) => {
  return (
    <section style={{ border: "1px solid #000", marginTop: "10px", padding: "10px"}}>
      <p>{nome}</p>
      <ul key={nome}>
        {propriedades.map((propriedades) => (
          <li key={propriedades}>{propriedades}</li>
        ))}
      </ul>
    </section>
  )
}

export default Produto