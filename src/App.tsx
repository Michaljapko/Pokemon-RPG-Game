import React from "react";
import CatchPokemon from "store/features/gameplay/views/CatchPokemon";
import Fight from "store/features/gameplay/views/Fight";
import Search from "store/features/gameplay/views/Search";
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
      <Search />
      <CatchPokemon />
      <Fight />
      <TakePhoto />
      <Pokedex />
      <Shop />
    </>
  );
}

export default App;
