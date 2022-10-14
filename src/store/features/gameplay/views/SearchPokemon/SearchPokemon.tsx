import { getPokemon } from "store/features/pokemon/pokemonSlice";
import { useAppDispatch } from "store/hooks";

const SearchPokemon = () => {
  const dispatch = useAppDispatch();

  return (
    <p>
      {<button onClick={() => dispatch(getPokemon())}>SearchPokemon</button>}
    </p>
  );
};

export default SearchPokemon;
