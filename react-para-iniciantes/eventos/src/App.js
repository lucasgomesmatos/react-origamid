import React from "react";

const App = () => {
  // function handleClique(event) {
  //   console.log(event)
  // }
  return <button onClick={(event) => event.currentTarget.classList.toggle("active")}>Clique</button>;
};

export default App;
