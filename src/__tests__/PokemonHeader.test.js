import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import PokedexHeader from "../Component/PokemonHeader";
import { MemoryRouter } from "react-router-dom";

beforeEach(cleanup);

describe("Render Pokedex Header correctly", () => {
  it("Rendering 10 Owned and PokemonList Title", () => {
    const { debug } = render(
      <MemoryRouter initialEntries={["/"]}>
        <PokedexHeader title={"Pokemon List"} total={10} />
      </MemoryRouter>
    );

    expect(screen.getByText("Pokemon List")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
