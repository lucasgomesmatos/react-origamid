import React, { useState } from 'react';
import Form from './Form/Form';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <Form label={'Nome'} id={'nome'} value={nome} setValue={setNome} />
      <Form label={'E-mail'} id={'email'} value={email} setValue={setEmail} />
      {<li>{nome}</li>}
      {<li>{email}</li>}
    </form>
  );
};

export default App;
