import React, { useState } from 'react';

const PhotoPost = () => {
  const [token, setToken] = useState('');
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [idade, setIdade] = useState('');
  const [img, setImg] = useState('');

  const formData = new FormData();
  formData.append('img', img);
  formData.append('nome', nome);
  formData.append('peso', peso);
  formData.append('idade', idade);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => console.log(res));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Photo Post</h1>

      <input
        type="text"
        value={token}
        placeholder="token"
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        value={nome}
        placeholder="nome"
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        value={peso}
        placeholder="Peso"
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="text"
        value={idade}
        placeholder="idade"
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        placeholder="img"
        onChange={({ target }) => setImg(target.files[0])}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;
