import React, { useState } from 'react';

const TokenPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((json) => setToken(json.token));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Token</h1>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>

      <code>
        <p style={{ wordBreak: 'break-all', fontSize: '.8rem' }}>
          {token ? token : ''}
        </p>
      </code>
    </form>
  );
};

export default TokenPost;
