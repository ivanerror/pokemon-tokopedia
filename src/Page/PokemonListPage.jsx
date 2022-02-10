import React from "react";
import { useQuery } from "@apollo/client";
import { Waypoint } from "react-waypoint";

import { GET_POKEMON_LIST } from "../graphql/Pokemon";
import { PokemonContainer } from "../Component/styles";
import PokedexHeader from "../Component/PokemonHeader";

import PokemonList from "../Component/PokemonList";

import { usePokedex } from "../Context/PokedexProvider";

const PokemonListPage = () => {
  const pokedex = usePokedex();
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMON_LIST, {
    variables: { limit: 20, offset: 0 },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  const { pokemons } = data;
  const { results, nextOffset, count } = pokemons;

  const handleFetchMore = () =>
    fetchMore({
      variables: { limit: 18, offset: nextOffset },
      updateQuery: (pv, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return pv;
        }

        const resValue = {
          pokemons: {
            ...fetchMoreResult.pokemons,
            results: [
              ...pv.pokemons.results,
              ...fetchMoreResult.pokemons.results,
            ],
          },
        };

        return resValue;
      },
    });

  return (
    <>
      <PokedexHeader title="Pokemon List" total={pokedex.length} />
      <PokemonContainer>
        {results.map((pokemon, index) => (
          <div>
            {index === results.length - 6 && results.length < count && (
              <Waypoint onEnter={handleFetchMore} />
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
