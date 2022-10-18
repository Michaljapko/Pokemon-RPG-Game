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
  addBio,
  addPokeball,
  addCandy,
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
        dispatch(getPokemon());
        return;
      }
      if (getChanceRate() < NOTHING_DROP) {
        console.log("nothing");
        return;
      }
      if (getChanceRate() < BIO_DROP) {
        dispatch(addBio());
        return;
      }
      if (getChanceRate() < POKEBALL_DROP) {
        dispatch(addPokeball());
        return;
      }
      if (getChanceRate() < CANDY_DROP) {
        dispatch(addCandy());
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
