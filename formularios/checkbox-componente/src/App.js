import React, { useState } from 'react';
import Checkbox from './Checkbox/Checkbox';

const App = () => {
  const [linguagem, setLinguagem] = useState([]);

  return (
    <form>
      <Checkbox options={['Java']} value={linguagem} setValue={setLinguagem} />
    </form>
  );
};

export default App;
