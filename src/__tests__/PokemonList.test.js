import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import PokedexHeader from "../Component/PokemonHeader";
import { MemoryRouter } from "react-router-dom";
import PokemonList from "../Component/PokemonList";

beforeEach(cleanup);

describe("Render Pokemon Card Correctly", () => {
  it("rendering 1 list of pokemon", () => {
    const pokemon = {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    };

    const totalOwned = 10;

    render(
      <MemoryRouter initialEntries={["/"]}>
        <PokemonList pokemon={pokemon} totalOwned={totalOwned} />
      </MemoryRouter>
    );

    expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(`${totalOwned} Owned`)).toBeInTheDocument();
  });
});
