import React, { useState } from "react";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];


const App = () => {
  const [form, setForm] = useState(formFields.reduce((acc, field) => {
    return  {
      ...acc,
      [field.id]: "",
    }
  }, {}));

  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

 async function handleSubmit(e) {
    e.preventDefault();
    const data = fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    });

    setResultado(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form.id} onChange={handleChange} />
        </div>
      ))}
      {resultado && resultado.ok && <p>Cadastrado com Sucesso</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
