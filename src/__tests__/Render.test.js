import { render, screen } from "@testing-library/react";
import AppWrapper from "../AppWrapper";
import PokemonList from "../Component/PokemonList";
import PokemonDetailPage from "../Page/PokemonDetailPage";
import MyPokemonPage from "../Page/MyPokemonPage";

test("Render pokemon card Correctly", () => {
  const pokemon = {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  };

  const totalOwned = 10;

  render(
    <AppWrapper>
      <PokemonList pokemon={pokemon} totalOwned={totalOwned} />
    </AppWrapper>
  );

  expect(screen.getByText(pokemon.name)).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText(`${totalOwned} Owned`)).toBeInTheDocument();
});

test("Render pokemon detail Correctly", () => {
  render(
    <AppWrapper>
      <PokemonDetailPage />
    </AppWrapper>
  );
});
