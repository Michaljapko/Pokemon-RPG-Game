import { getPokemon } from "store/features/pokemon/pokemonSlice";
import {
  selecktBackpack,
  reduceSearchDevice,
} from "store/features/trainer/trainerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const SearchPokemon = () => {
  const dispatch = useAppDispatch();
  const backpack = useAppSelector(selecktBackpack);

  const handleSearchPokemon = () => {
    if (backpack.searchDevice) {
      dispatch(reduceSearchDevice());
      dispatch(getPokemon());
    }
    console.log("You dont have a searchDevice");
    return;
  };

  return <button onClick={() => handleSearchPokemon()}>SearchPokemon</button>;
};

export default SearchPokemon;
