import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {state}
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
    </div>
  );
}

export default App;
