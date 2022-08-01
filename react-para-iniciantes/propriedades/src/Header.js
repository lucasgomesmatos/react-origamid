import React from "react";

const Header = ({dados}) => {
  return (
    <div style={{ color: dados.color, fontSize: dados.fontSize }}>{dados.title}</div>
  );
}

export default Header;