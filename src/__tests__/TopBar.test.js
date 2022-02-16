/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import TopBar from "../Component/TopBar";
import { useLocation, MemoryRouter } from "react-router-dom";

beforeEach(cleanup);

describe("<TopBar />", () => {
  it("Render Top Bar with Pokedex Menu", () => {
    const { debug } = render(
      <MemoryRouter initialEntries={["/"]}>
        <TopBar />
      </MemoryRouter>
    );
    debug();

    expect(screen.getByTestId("pokedex")).toBeInTheDocument();
  });

  it("Render Top Bar with PokemonList Menu", () => {
    const { debug } = render(
      <MemoryRouter initialEntries={["/my-pokemon"]}>
        <TopBar />
      </MemoryRouter>
    );
    debug();

    expect(screen.getByTestId("pokemon-list")).toBeInTheDocument();
  });

  it("Render Top Bar with Pokedex & PokemonList Menu", () => {
    const { debug } = render(
      <MemoryRouter initialEntries={["/pokemon/pikachu"]}>
        <TopBar />
      </MemoryRouter>
    );
    debug();

    expect(screen.getByTestId("pokedex")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-list")).toBeInTheDocument();
  });
});
