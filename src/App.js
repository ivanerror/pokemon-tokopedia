//page imports
import MyPokemonPage from "./Page/MyPokemonPage";
import PokemonListPage from "./Page/PokemonListPage";
import PokemonDetailPage from "./Page/PokemonDetailPage";

import TopBar from "./Component/TopBar";
import { ContentWrapper } from "./Component/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import { PokedexProvider } from "./Context/PokedexProvider";

import "./App.css";

function App() {
  return (
    <>
      <PokedexProvider>
        <TopBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<PokemonListPage />} />
            <Route path="/my-pokemon" element={<MyPokemonPage />} />
            <Route path="/pokemon/:pokeName" element={<PokemonDetailPage />} />
            <Route path="/*" element={<Navigate to="/"/>} />
          </Routes>
        </ContentWrapper>
      </PokedexProvider>
    </>
  );
}

export default App;
