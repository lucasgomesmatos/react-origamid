import React, { useState } from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');

  return (
    <form>
      <Select
        options={['smartphone', 'notebook', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input label={'Nome'} id={'nome'} value={nome} setValue={setNome} />
      <Input label={'E-mail'} id={'email'} value={email} setValue={setEmail} />
      {<li>{nome}</li>}
      {<li>{email}</li>}
      {<li>{produto}</li>}
    </form>
  );
};

export default App;
