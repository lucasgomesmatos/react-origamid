import React, { useState } from 'react';
import Input from './Form/Input';
import useForm from './useForm/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="cep" type="text" {...cep} placeholder="00000-000" />
      <Input label="email" type="email" {...email} />
      <button style={{ marginTop: '1rem' }}>Enviar</button>
    </form>
  );
};

export default App;
