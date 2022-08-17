import "./header.css";
import React from "react";

const header = props => {
  return <header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
      <i className={'fa fa-${props.icon}'}></i> {props.title}
    </h1>
  </header>;
};
export default header;
