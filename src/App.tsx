import React from "react";
import SearchPokemon from "store/features/gameplay/views/SearchPokemon";
import PokemonCard from "store/features/pokemon/views/PokemonCard";
import TrainerBack from "store/features/trainer/views/TrainerBack/TrainerBack";

function App() {
  return (
    <>
      <TrainerBack />
      <PokemonCard />
      <SearchPokemon />
    </>
  );
}

export default App;
