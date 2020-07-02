import React from "react";
import propTypes from "prop-types";

import Button from "elements/Button";
import Logo from "parts/logoHeader";
import ButtonRegister from "parts/ButtonRegister";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Logo />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/help")}`}>
                <Button className="nav-link" type="link" href="/help">
                  Help
                </Button>
              </li>
            </ul>
            <ButtonRegister />
          </div>
        </nav>
      </div>
    </header>
  );
}
