import React from "react";
import { NavigationBar, NavbarLogo, NavbarMenu } from "./styles";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavigationBar>
      <NavbarLogo src="/assets/pokemon-logo.png" />

      {path !== "/" && (
        <Link to="/">
          <NavbarMenu src="/assets/pikachu.png" />
        </Link>
      )}
      {path !== "/my-pokemon" && (
        <Link to="/my-pokemon">
          <NavbarMenu src="/assets/pokeball.png" />
        </Link>
      )}
    </NavigationBar>
  );
};

export default TopBar;
