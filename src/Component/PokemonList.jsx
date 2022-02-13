import React from "react";
import styled from "@emotion/styled";
import { Color } from "../Component/styles";
import { StyledLink } from "../Component/styles";

const PokemonCard = styled.div`
  border: 1px solid ${Color.red};
  box-size: content-box;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.2s ease-in-out;
  background-color: ${Color.white};

  :hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  img {
    height: 10rem;
    object-fit: contain;
  }
`;

const PokeName = styled.div`
  color: ${Color.darkGreen};
  font-weight: bold;
  line-height: 1.5rem;
  text-align: center;
  text-transform: Capitalize;
  text-overflow: ellipsis;
`;

const PokeOwned = styled.div`
  color: ${Color.white};
  background-color: ${Color.red};
  border-radius: 0.6rem 0.6rem 0 0;
  font-weight: bold;
  line-height: 1.5rem;
  text-align: center;
  text-transform: Capitalize;
`;

const PokemonList = ({ pokemon, totalOwned }) => {
  return (
    <StyledLink to={`/pokemon/${pokemon.name}`}>
      <PokemonCard key={pokemon.id} data-testid="pokemon-card">
        <PokeOwned data-testid="totalOwned">{totalOwned} Owned</PokeOwned>
        <img src={pokemon.image} alt="" data-testid="pokemonImage" />
        <PokeName data-testid="pokemonName">{pokemon.name}</PokeName>
      </PokemonCard>
    </StyledLink>
  );
};

export default PokemonList;
