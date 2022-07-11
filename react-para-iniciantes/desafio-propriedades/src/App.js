import React, { Component } from "react";
import Header from "./Header/Header";
import Produtos from "./Produtos/Produtos";
import Home from "./Home/Home";

const App = () => {
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)

  const { pathname } = window.location;

  if(pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component/>
    </div>
  );
};

export default App;
