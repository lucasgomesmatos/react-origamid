import React from "react";
import { Outlet } from "react-router-dom";
import Produtos from "./Produtos/Produtos";





const App = () => {

  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
        </ul>
      </nav>
      
      <Produtos/>
    </>
  )
};

export default App;
