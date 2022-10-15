import { catchPokemon } from "store/features/pokedex/pokedexSlice";
import { selecktPokemon } from "store/features/pokemon/pokemonSlice";
import {
  reducePokeball,
  selecktBackpack,
} from "store/features/trainer/trainerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const CatchPokemon = () => {
  const dispatch = useAppDispatch();
  const backpack = useAppSelector(selecktBackpack);
  const pokemon = useAppSelector(selecktPokemon);

  const handleCatchPokemon = () => {
    if (backpack.pokeball) {
      dispatch(reducePokeball());
      dispatch(catchPokemon(pokemon));
    }
    console.log("You dont have a pokeball");
    return;
  };

  return <button onClick={() => handleCatchPokemon()}>Catch Pokemon</button>;
};

export default CatchPokemon;
