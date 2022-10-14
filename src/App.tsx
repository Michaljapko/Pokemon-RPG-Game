import React from "react";
import SearchPokemon from "store/features/gameplay/views/SearchPokemon";
import PokemonCard from "store/features/pokemon/views/PokemonCard";

function App() {
  return (
    <>
      <PokemonCard />
      <SearchPokemon />
    </>
  );
}

export default App;
