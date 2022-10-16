import React from "react";
import CatchPokemon from "store/features/gameplay/views/CatchPokemon";
import SearchPokemon from "store/features/gameplay/views/SearchPokemon";
import TakePhoto from "store/features/gameplay/views/TakePhoto/TakePhoto";
import Pokedex from "store/features/pokedex/views/Pokedex/Pokedex";
import PokemonCard from "store/features/pokemon/views/PokemonCard";
import Shop from "store/features/shop/views/Shop/Shop";
import TrainerBack from "store/features/trainer/views/TrainerBack/TrainerBack";

function App() {
  return (
    <>
      <TrainerBack />
      <PokemonCard />
      <SearchPokemon />
      <CatchPokemon />
      <TakePhoto />
      <Pokedex />
      <Shop />
    </>
  );
}

export default App;
