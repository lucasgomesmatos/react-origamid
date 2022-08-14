import React, { useState } from 'react';

const PhotoGet = () => {
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>GET PHOTO</h1>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Buscar</button>
    </form>
  );
};

export default PhotoGet;
