import React from "react";
import { NavigationBar, NavbarButton, H4 } from "./styles";

const CatchBar = ({ onClick }) => {
  return (
    <NavigationBar bottom>
      <NavbarButton onClick={onClick}>Catch</NavbarButton>
    </NavigationBar>
  );
};

export default CatchBar;
