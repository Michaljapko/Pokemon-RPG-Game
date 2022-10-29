import React from "react";
import CatchPokemon from "features/gameplay/views/CatchPokemon";
import Fight from "features/gameplay/views/Fight";
import Search from "features/gameplay/views/Search";
import TakePhoto from "features/gameplay/views/TakePhoto/TakePhoto";
import Pokedex from "features/pokedex/views/Pokedex/Pokedex";
import PokemonCard from "features/pokemon/views/PokemonCard";
import Shop from "features/shop/views/Shop/Shop";
import TrainerBack from "features/trainer/views/TrainerBack/TrainerBack";

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
