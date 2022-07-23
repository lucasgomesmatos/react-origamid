import React, { useState } from 'react';
import Input from './Form/Input';
import './styles/style.css';

const App = () => {
  const [cep, setCep] = useState([]);
  const [error, setError] = useState([]);
  const [res, setRes] = useState([]);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleOnBlur({ target }) {
    validateCep(target.value);
    fetch(`https://viacep.com.br/ws/${target.value}/json/`)
      .then((res) => res.json())
      .then((json) => setRes(json));
  }

  function handleChange({ target }) {
    if (error) {
      validateCep(target.value);
    }
    setCep(target.value);
  }

  return (
    <form>
      <h1>Busca CEP</h1>
      <Input
        label="CEP"
        type="text"
        id="cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      {error}

      <div>
        {res && (
          <>
            {
              <code>
                <p>
                  {res.localidade} - {res.uf}
                </p>
                <p>{res.logradouro}</p>
                <p></p>
              </code>
            }
          </>
        )}
      </div>
    </form>
  );
};

export default App;
