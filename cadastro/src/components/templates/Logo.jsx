import "./logo.css";
import React from "react";
import logo from '../../assets/imgs/Frete expresso.png'

export default props => {
  return <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </aside>;
};
