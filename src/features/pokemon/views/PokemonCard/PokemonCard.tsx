import { useAppSelector } from "store/hooks";
import { calculateCP } from "../../helpers/calculateCP";
import { selecktPokemon } from "../../pokemonSlice";
const PokemonCard = () => {
  const pokemon = useAppSelector(selecktPokemon);
  return (
    <div>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.pokemonNum}.png`}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <h3>CP: {calculateCP(pokemon)}</h3>
      <p>{pokemon.type}</p>
      <p>Attack:{pokemon.attack}</p>
      <p>Defence:{pokemon.defence}</p>
      <p>Expirience:{pokemon.expirience}</p>
      <p>
        Hp:{pokemon.hp}/{pokemon.currentHp}
      </p>
    </div>
  );
};

export default PokemonCard;
