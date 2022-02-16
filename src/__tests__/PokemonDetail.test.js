import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PokemonDetailPage from "../Page/PokemonDetailPage";
import { MemoryRouter } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

beforeEach(cleanup);

const data = {
  pokemon: {
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },

    types: [
      {
        type: {
          name: "grass",
        },
      },
    ],
    abilities: [
      {
        ability: {
          name: "overgrow",
        },
      },
    ],
    moves: [
      {
        move: { name: "tackle" },
      },
    ],
  },
};

jest.mock("@apollo/client");
jest.mock("react-router-dom");

describe("Render Pokemon Detail", () => {
  it("Render pokemon detail Correctly", () => {
    useParams.mockReturnValue({ pokeName: "bulbasaur" });
    useQuery.mockReturnValue({ data: data, loading: false, error: null });
    const { debug } = render(<PokemonDetailPage />);

    expect(screen.getByText(data.pokemon.name)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-types")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-abilities")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-moves")).toBeInTheDocument();
  });
});
