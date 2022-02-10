import React from "react";
import { NavigationBar, NavbarButton, CheckBoxInput } from "./styles";

const ReleaseBar = ({ onClick, selectAll, checked }) => {
  return (
    <NavigationBar bottom>
      <CheckBoxInput
        checked={checked}
        onChange={selectAll}
        label="Select All"
      />
      <NavbarButton onClick={onClick}>Release</NavbarButton>
    </NavigationBar>
  );
};

export default ReleaseBar;
