import React from "react";

const Titulo = ({ texto }) => {
  return (
    <h2 style={{ color: "tomato", textTransform: "uppercase" }}>
     {texto}
    </h2>
  );
};

export default Titulo;
