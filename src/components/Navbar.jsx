import React from "react";

import logozagreb from "../assets/images/logozagreb.png";
//import agqara from "../assets/images/agqarasekil.png";

const Navbar = () => {
  return (
    <div className="navbar-1">
      <nav className="navbar navbar-expand-lg ">
        <div classNameName="container-fluid">
          <a className="navbar-brand" href="##">
            <img src={logozagreb} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="##">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="##">
                  Services
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="##"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Our Cars
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="##">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="##">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="##">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
