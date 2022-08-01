import React from "react";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from "./Header";

const bg = {
  title: "Curso React",
  color: "#1199FF",
  fontSize: "36px"
}

const App = () => {

  return (
    <>
      <Header dados={bg}/>
      <Form/>
      <Footer/>
    </>
  )
};

export default App;
