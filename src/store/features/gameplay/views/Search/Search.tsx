import {
  BIO_DROP,
  CANDY_DROP,
  NOTHING_DROP,
  POKEBALL_DROP,
  POKEMON_DROP,
} from "constant/searchingDrop";
import { getPokemon } from "store/features/pokemon/pokemonSlice";
import {
  selecktBackpack,
  reduceSearchDevice,
} from "store/features/trainer/trainerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const Search = () => {
  const dispatch = useAppDispatch();
  const backpack = useAppSelector(selecktBackpack);

  const handleSearchPokemon = () => {
    if (backpack.searchDevice) {
      const getChanceRate = () => Math.random();
      dispatch(reduceSearchDevice());
      if (getChanceRate() < POKEMON_DROP) {
        getPokemon();
        return;
      }
      if (getChanceRate() < NOTHING_DROP) {
        console.log("nothing");
        return;
      }
      if (getChanceRate() < BIO_DROP) {
        console.log("bio");
        return;
      }
      if (getChanceRate() < POKEBALL_DROP) {
        console.log("pokeball");
        return;
      }
      if (getChanceRate() < CANDY_DROP) {
        console.log("candy");
        return;
      }
      console.log("nothing");
      return;
    }
    console.log("You dont have a searchDevice");
    return;
  };

  return (
    <button onClick={() => handleSearchPokemon()}>Use Search Device</button>
  );
};

export default Search;
