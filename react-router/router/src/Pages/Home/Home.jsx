import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Página Home</h1>
      <Link to={'produtos/notebook'}>notebook</Link>
      <Link style={{ marginLeft: '1rem' }} to={'produtos/smartphone'}>
        smartphone
      </Link>
    </div>
  );
};

export default Home;
