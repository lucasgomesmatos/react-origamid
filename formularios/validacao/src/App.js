import React, { useState } from 'react';
import Input from './Form/Input';
import styles from './styles/style.module.css';

const App = () => {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');

  const regexCep = /^\d{5}-?\d{3}$/;

  function validacaoCep(value) {
    if (value.length === 0 || value.length > 8) {
      setError('Prencha um valor');
      return false;
    } else if (!regexCep.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validacaoCep(target.value);
    setCep(target.value);
  }

  function onBlur({ target }) {
    validacaoCep(target.value);
  }

  console.log(cep);

  return (
    <>
      <Input
        className={error ? `error` : ''}
        label="cep"
        type="text"
        value={cep}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="00000-000"
      />
      {error}
    </>
  );
};

export default App;
