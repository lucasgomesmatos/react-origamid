import React, { useState } from 'react';
import Input from './Form/Input';

const App = () => {
  const [cep, setCep] = useState([]);
  const [error, setError] = useState([]);

  function handleOnBlur({ target }) {
    if (target.value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(target.value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  return (
    <form>
      <Input
        label="CEP"
        type="text"
        id="cep"
        placeholder="00000-000"
        value={cep}
        setValue={setCep}
        handleOnBlur={handleOnBlur}
      />
      {error}
    </form>
  );
};

export default App;
