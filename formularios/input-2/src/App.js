import React, { useEffect, useState } from "react";
import useFetch from "./useFetch/useFetch";

const App = () => {
  
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const {request, dados, error, loading} = useFetch()

  async function handleSubmit(event) {
    event.preventDefault();
    request("https://ranekapi.origamid.dev/json/api/usuario", form)
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  return (
    <form onSubmit={handleSubmit}>
      {dados === false ? <p>Error</p> : ""}
      {dados && <p>Usuário Cadastrado</p>}
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
      <label htmlFor="senha">Senha:</label>
      <input
        type="password"
        name="senha"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep:</label>
      <input
        type="text"
        name="cep"
        id="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <label htmlFor="rua">Rua:</label>
      <input
        type="text"
        name="rua"
        id="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade:</label>
      <input
        type="text"
        name="cidade"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
