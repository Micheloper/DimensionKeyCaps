import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthContext";
import { CartWidget } from "./CartWidget";
import { Icon0, Icon1, Icon2, Icon3, Icon4 } from "./Icons";

import "./NavBar.scss";

export const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(UserAuthContext);
  const handlesubmit = () => {
    setIsAuthenticated(false);
  };
  return (
    <nav className="navbar1">
      <div className="navbar-nav">
        <NavLink
          activeClassName={"activeLink"}
          className="logo nav-link"
          exact
          to="/"
        >
          <Icon0 />
          <span class="link-text logo-text"> Home - Home</span>
        </NavLink>

        <NavLink
          activeClassName={"activeLink"}
          className="nav-item nav-link"
          exact
          to="/productos/keyBoard"
        >
          <Icon1 />
          <span class="link-text"> KeyBoard</span>
        </NavLink>

        <NavLink
          activeClassName={"activeLink"}
          className="nav-item nav-link"
          exact
          to="/productos/KeyCaps Colores"
        >
          <Icon2 />
          <span class="link-text">KeyCaps Colores</span>
        </NavLink>

        <NavLink
          activeClassName={"activeLink"}
          className="nav-item nav-link"
          exact
          to="/productos/KeycapsPokemon"
        >
          <Icon3 />
          <span class="link-text">KeyCaps Pokemon</span>
        </NavLink>

        <NavLink
          activeClassName={"activeLink"}
          className="nav-item nav-link"
          exact
          to="/productos/KeyCapsUnicos"
        >
          <Icon4 />
          <span class="link-text">KeyCaps Unicos</span>
        </NavLink>

        <Link to="/cart">
          <CartWidget />
        </Link>
        {!isAuthenticated || <button onClick={handlesubmit}> Salir</button>}
      </div>
    </nav>
  );
};
