import { useAppSelector } from "store/hooks";
import { selecktPokedex } from "../../pokedexSlice";

const Pokedex = () => {
  const pokedexPokemons = useAppSelector(selecktPokedex);

  return (
    <div>
      <h3>Pokedex {pokedexPokemons.length}</h3>
      {pokedexPokemons &&
        pokedexPokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <h4>{pokemon.name}</h4>
            <p>
              {pokemon.currentHp}/{pokemon.hp}
            </p>
            <p>Edit name / Heal / Lvl Up </p>
          </div>
        ))}
    </div>
  );
};
export default Pokedex;
