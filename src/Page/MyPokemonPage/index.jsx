import React from "react";
import {
  CheckBoxInput,
  List,
  ListItem,
  PokedexContainer,
  PokedexWrapper,
  PokemonGroup,
  ReleaseButton,
} from "../../Component/styles";
import PokedexHeader from "../../Component/PokemonHeader";
import { Link } from "react-router-dom";
import ReleaseBar from "../../Component/ReleaseBar";
import { usePokedex } from "../../Context/PokedexProvider";
import MyPokemonFunc from "./MyPokemonFunc";

const MyPokemon = () => {
  const pokedex = usePokedex();

  const {
    handleReleasePokemon,
    handleSelectPokemon,
    handleSelectPokemonGroup,
    handleSelectAll,
    handleReleaseButton,
    groupedPokedex,
    selectedPokemon,
    selectedPokemonGroup,
    checked,
  } = MyPokemonFunc();

  return (
    <>
      <PokedexHeader title="My Pokemon" total={pokedex.length} />
      <PokedexContainer>
        {groupedPokedex.map((pokemon) => {
          return (
            <PokedexWrapper>
              <CheckBoxInput
                value={pokemon.name}
                checked={selectedPokemonGroup.includes(pokemon.name)}
                onChange={() => handleSelectPokemonGroup(pokemon)}
                label={pokemon.name}
                name={`pokeGroup`}
              />

              <PokemonGroup>
                <Link to={`/pokemon/${pokemon.name}`}>
                  <img src={pokemon.image} alt="" />
                </Link>
                <List>
                  {pokemon.nickname.map((nickname) => {
                    return (
                      <ListItem>
                        <CheckBoxInput
                          value={nickname}
                          checked={selectedPokemon.includes(nickname)}
                          onChange={(value) =>
                            handleSelectPokemon(value, nickname)
                          }
                          label={nickname}
                          name={pokemon.name}
                        />

                        <ReleaseButton
                          onClick={() => handleReleasePokemon(nickname)}
                        >
                          <img src="/assets/cancel.png" alt="" />
                        </ReleaseButton>
                      </ListItem>
                    );
                  })}
                </List>
              </PokemonGroup>
            </PokedexWrapper>
          );
        })}
      </PokedexContainer>

      <ReleaseBar
        selectAll={() => handleSelectAll()}
        checked={checked}
        onClick={handleReleaseButton}
      />
    </>
  );
};

export default MyPokemon;
