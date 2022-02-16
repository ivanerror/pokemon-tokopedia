import React from "react";
import { NavigationBar, NavbarLogo, NavbarMenu, StyledLink } from "./styles";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavigationBar>
      <NavbarLogo src="/assets/pokemon-logo.png" />

      {path !== "/" && (
        <StyledLink as={Link} to="/" data-testid="pokemon-list">
          <NavbarMenu src="/assets/pikachu.png" />
        </StyledLink>
      )}
      {path !== "/my-pokemon" && (
        <StyledLink as={Link} to="/my-pokemon" data-testid="pokedex">
          <NavbarMenu src="/assets/pokeball.png" />
        </StyledLink>
      )}
    </NavigationBar>
  );
};

export default TopBar;
