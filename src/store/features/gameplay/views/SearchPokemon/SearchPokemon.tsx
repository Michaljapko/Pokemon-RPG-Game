import { getPokemon } from "store/features/pokemon/pokemonSlice";
import { useAppDispatch } from "store/hooks";

const SearchPokemon = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(getPokemon())}>SearchPokemon</button>;
};

export default SearchPokemon;
