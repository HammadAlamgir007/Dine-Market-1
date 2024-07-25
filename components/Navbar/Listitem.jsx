import React from "react";

const Listitem = ({ name }) => {
  return (
    <li className="nav-item">
      <a href="/" className="nav-links">
        {name}
      </a>
    </li>
  );
};

export default Listitem;