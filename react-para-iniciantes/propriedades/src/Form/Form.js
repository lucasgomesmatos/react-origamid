import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <form>
        <Input label={"E-mail"} id={"email"} required/>
        <Input label={"Nome"} id={"nome"} />
      <Button />
    </form>
  );
};

export default Form;
