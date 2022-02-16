import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  H4,
  P,
  DescContentWrapper,
  PokemonDetailStyled,
  DescWrapper,
  PokeName,
} from "../../Component/styles";

import { GET_POKEMON_DETAIL } from "../../graphql/Pokemon";
import CatchBar from "../../Component/CatchBar";
import PokemonDetailFunc from "./PokemonDetailFunc";

const PokeDesc = ({ title, content, ...props }) => {
  return (
    <DescContentWrapper {...props}>
      <H4>{title}</H4>
      <P>{content.join(", ").replace(/, ([^,]*)$/, " and $1")}</P>
    </DescContentWrapper>
  );
};

const PokemonDetail = () => {
  const { pokeName } = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: pokeName },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (!data?.pokemon) return null;

  const { pokemon } = data;

  const { handleCatchPokemon } = PokemonDetailFunc();

  return (
    <>
      <PokemonDetailStyled>
        <div>
          <img src={data.pokemon.sprites.front_default} alt="" />
        </div>
        <DescWrapper>
          <PokeName>{pokemon.name}</PokeName>
          <PokeDesc
            title={"Types"}
            content={pokemon.types.map((type) => type.type.name)}
            data-testid="pokemon-types"
          />
          <PokeDesc
            title={"Abilities"}
            content={pokemon.abilities.map((ability) => ability.ability.name)}
            data-testid="pokemon-abilities"
          />
          <PokeDesc
            title={"Moves"}
            content={pokemon.moves.map((move) => move.move.name)}
            data-testid="pokemon-moves"
          />
        </DescWrapper>
        <CatchBar onClick={() => handleCatchPokemon(pokemon)} />
      </PokemonDetailStyled>
    </>
  );
};

export default PokemonDetail;
