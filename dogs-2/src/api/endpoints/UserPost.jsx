import React, { useState } from 'react';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => console.log(res));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>User Post</h1>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
