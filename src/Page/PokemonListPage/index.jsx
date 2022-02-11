import React from "react";
import { useQuery } from "@apollo/client";
import { Waypoint } from "react-waypoint";

import { GET_POKEMON_LIST } from "../../graphql/Pokemon";
import { PokemonContainer } from "../../Component/styles";
import PokedexHeader from "../../Component/PokemonHeader";

import PokemonList from "../../Component/PokemonList";

import { usePokedex } from "../../Context/PokedexProvider";

import fetchMoreConf from "./fetchMoreConf";

const PokemonListPage = () => {
  const pokedex = usePokedex();
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 20, offset: 0 },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { pokemons } = data;
  const { results, nextOffset, count } = pokemons;

  return (
    <>
      <PokedexHeader title="Pokemon List" total={pokedex.length} />
      <PokemonContainer>
        {results.map((pokemon, index) => (
          <div>
            {index === results.length - 8 && results.length < count && (
              <Waypoint
                onEnter={() => fetchMore(fetchMoreConf(20, nextOffset))}
              />
            )}
            <PokemonList
              pokemon={pokemon}
              totalOwned={pokedex.filter((x) => x.name === pokemon.name).length}
            />
          </div>
        ))}
      </PokemonContainer>
    </>
  );
};

export default PokemonListPage;
