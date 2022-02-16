import { render, screen, cleanup } from "@testing-library/react";
import AppWrapper from "../AppWrapper";
import PokemonList from "../Component/PokemonList";
import PokemonDetailPage from "../Page/PokemonDetailPage";
import MyPokemonPage from "../Page/MyPokemonPage";

beforeEach(cleanup);

test("Render pokemon detail Correctly", () => {
  render(
    <AppWrapper>
      <PokemonDetailPage />
    </AppWrapper>
  );
});
