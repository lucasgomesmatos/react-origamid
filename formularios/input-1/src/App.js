import React, { useState } from "react";

const App = () => {
  const [nome, setNome] = useState(null);
  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
