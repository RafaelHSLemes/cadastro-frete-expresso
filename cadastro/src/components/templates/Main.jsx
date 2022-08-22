import "./main.css";
import React from "react";
import Header from "./header";

const Main = props => {
  return (
    <React.Fragment>
      <Header />
      <main className="content">Conteúdo</main>
    </React.Fragment>
  );
};

export default Main;
