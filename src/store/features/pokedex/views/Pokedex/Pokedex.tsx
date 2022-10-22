import { calculateCP } from "store/features/pokemon/helpers/calculateCP";
import {
  choosePokemon,
  selecktPokedex,
  sellPokemon,
  healPokemon,
} from "store/features/trainer/trainerSlice";
import { useAppSelector, useAppDispatch } from "store/hooks";

const Pokedex = () => {
  const pokedexPokemons = useAppSelector(selecktPokedex);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>Pokedex {pokedexPokemons.length}</h3>
      {pokedexPokemons &&
        pokedexPokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <h4>{pokemon.name}</h4>
            <h3>CP: {calculateCP(pokemon)}</h3>
            <p>
              {pokemon.currentHp}/{pokemon.hp}
            </p>
            <p>Edit name /Lvl Up </p>
            <button onClick={() => dispatch(sellPokemon(pokemon))}>sell</button>
            <button onClick={() => dispatch(healPokemon(pokemon))}>Heal</button>
            <button onClick={() => dispatch(choosePokemon(pokemon.id))}>
              Chose
            </button>
          </div>
        ))}
    </div>
  );
};
export default Pokedex;
