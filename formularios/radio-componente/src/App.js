import React, { useState } from 'react';
import Radio from './Form/Radio';

const App = () => {
  const [radio, setRadio] = useState('tablet');

  return (
    <form>
      <Radio
        options={['notebook', 'tablet']}
        radio={radio}
        setRadio={setRadio}
      />
      {
        <ul>
          <li>{radio}</li>
        </ul>
      }
    </form>
  );
};

export default App;
