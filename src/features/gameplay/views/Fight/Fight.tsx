import { ATTACK_RATE, DEFENCE_RATE, MISS_RATE } from "constant/fightRate";
import { PokemonType } from "features/pokedex/types/pokemon.type";
import { hitPokemon, selecktPokemon } from "features/pokemon/pokemonSlice";
import {
  hitTrainerPokemon,
  selecktChosenPokemon,
} from "features/trainer/trainerSlice";

import { useAppDispatch, useAppSelector } from "store/hooks";

const Fight = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selecktPokemon);
  const chosenPokemon = useAppSelector(selecktChosenPokemon);

  const calculateAttack = (attacker: PokemonType, defender: PokemonType) => {
    if (Math.random() < MISS_RATE) {
      console.log("You missed");
      return 0;
    }
    const attack = Math.floor(attacker.attack * ATTACK_RATE * Math.random());
    const defence = Math.floor(defender.defence * DEFENCE_RATE * Math.random());
    const attackPower = attack - defence;
    if (attackPower < 0) return 0;
    return attackPower;
  };

  const handleAttack = () => {
    const attackPower = calculateAttack(chosenPokemon!, pokemon);
    dispatch(hitPokemon(attackPower));
    const attackEnemyPower = calculateAttack(pokemon, chosenPokemon!);
    dispatch(hitTrainerPokemon(attackEnemyPower));
  };

  return <button onClick={() => handleAttack()}>Attack </button>;
};

export default Fight;
