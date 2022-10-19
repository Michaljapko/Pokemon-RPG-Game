import { calculateCP } from "store/features/pokemon/helpers/calculateCP";
import { selecktPokedex } from "store/features/trainer/trainerSlice";
import { useAppSelector } from "store/hooks";

const Pokedex = () => {
  const pokedexPokemons = useAppSelector(selecktPokedex);

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
            <p>Edit name / Heal / Lvl Up / Sell</p>
          </div>
        ))}
    </div>
  );
};
export default Pokedex;
