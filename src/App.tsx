import React from "react";
import SearchPokemon from "store/features/gameplay/views/SearchPokemon";
import Pokedex from "store/features/pokedex/views/Pokedex/Pokedex";
import PokemonCard from "store/features/pokemon/views/PokemonCard";
import TrainerBack from "store/features/trainer/views/TrainerBack/TrainerBack";

function App() {
  return (
    <>
      <TrainerBack />
      <PokemonCard />
      <SearchPokemon />
      <Pokedex />
    </>
  );
}

export default App;
