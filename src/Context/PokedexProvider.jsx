import React, { createContext, useContext, useState, useEffect } from "react";

const PokedexContext = createContext();
const PokedexUpdateContext = createContext();

export const usePokedex = () => useContext(PokedexContext);
export const usePokedexUpdate = () => useContext(PokedexUpdateContext);

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("pokedex")) {
      setPokedex(JSON.parse(localStorage.getItem("pokedex")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
  }, [pokedex]);

  return (
    <PokedexContext.Provider value={pokedex}>
      <PokedexUpdateContext.Provider value={setPokedex}>
        {children}
      </PokedexUpdateContext.Provider>
    </PokedexContext.Provider>
  );
};
