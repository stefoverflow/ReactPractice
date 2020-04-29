import React from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered!");

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
