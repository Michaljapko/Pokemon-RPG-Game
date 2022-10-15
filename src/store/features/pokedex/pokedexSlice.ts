import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { PokemonType } from "./types/pokemon.type";

const initialState: { pokedexPokemons: PokemonType[] } = {
  pokedexPokemons: [],
};

export const pokedexSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
    catchPokemon: (state, { payload }: PayloadAction<PokemonType>) => {
      state.pokedexPokemons = [payload, ...state.pokedexPokemons];
    },
  },
});

export const { catchPokemon } = pokedexSlice.actions;

export const selecktPokedex = (state: RootState) =>
  state.pokedex.pokedexPokemons;

export default pokedexSlice.reducer;
