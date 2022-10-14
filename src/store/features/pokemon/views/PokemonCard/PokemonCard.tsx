import { useAppSelector } from "store/hooks";
import { selecktPokemon } from "../../pokemonSlice";
const PokemonCard = () => {
  const pokemon = useAppSelector(selecktPokemon);
  return (
    <div>
      <h2>{pokemon.name}</h2>
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
