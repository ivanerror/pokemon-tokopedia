import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import {
  H4,
  P,
  DescContentWrapper,
  PokemonDetailStyled,
  DescWrapper,
  PokeName,
  Color,
} from "../Component/styles";

import { usePokedex, usePokedexUpdate } from "../Context/PokedexProvider";

import { GET_POKEMON_DETAIL } from "../graphql/Pokemon";
import CatchBar from "../Component/CatchBar";

const PokeDesc = ({ title, content }) => {
  return (
    <DescContentWrapper>
      <H4>{title}</H4>
      <P>{content.join(", ").replace(/, ([^,]*)$/, " and $1")}</P>
    </DescContentWrapper>
  );
};

const PokemonDetail = () => {
  const { pokeName } = useParams();

  const pokedex = usePokedex();
  const setPokedex = usePokedexUpdate();

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: pokeName },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  if (!data.pokemon) return null;

  const { pokemon } = data;
  
  const handleCatchPokemon = () => {
    if (Math.random() > 0.5) {
      Swal.fire({
        title: "You caught a pokemon!",
        text: "You can now catch it in the pokedex",
        icon: "success",
        confirmButtonText: "Cool",
        confirmButtonColor: Color.red,
      }).then((res) => {
        Swal.fire({
          title: "Name your pokemon!",
          input: "text",
          confirmButtonText: "Submit",
          preConfirm: (nickname) => {
            const nickNameList = pokedex.map((pokemon) => pokemon.nickname);

            if (nickNameList.includes(nickname)) {
              // if nickname is already taken
              return Swal.showValidationMessage(
                `${nickname} is already taken!`
              );
            }
            if (nickname.length < 4) {
              return Swal.showValidationMessage(`${nickname} is too short!`);
            }

            if (nickname.length > 10) {
              return Swal.showValidationMessage(`${nickname} is too long!`);
            }

            return nickname;
          },
          allowOutsideClick: false,
        }).then((result) => {
          setPokedex([
            ...pokedex,
            {
              name: pokemon.name,
              nickname: result.value,
              image: pokemon.sprites.front_default,
            },
          ]);
        });
      });
    } else {
      Swal.fire({
        title: "You missed!",
        text: "You can try again later",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

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
          />
          <PokeDesc
            title={"Abilities"}
            content={pokemon.abilities.map((ability) => ability.ability.name)}
          />
          <PokeDesc
            title={"Moves"}
            content={pokemon.moves.map((move) => move.move.name)}
          />
        </DescWrapper>
        <CatchBar onClick={handleCatchPokemon} />
      </PokemonDetailStyled>
    </>
  );
};

export default PokemonDetail;
