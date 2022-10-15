import { PokemonType } from "store/features/pokedex/types/pokemon.type";

export const calculateCP = ({ attack, defence, hp, expirience }: PokemonType) =>
  Math.floor((attack * 0.5 * defence * hp + expirience * 0.2) / 1000);
