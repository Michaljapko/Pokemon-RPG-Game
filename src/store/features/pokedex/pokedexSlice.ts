import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { PokemonType } from "./types/pokemon.type";

const initialState: { pokedexPokemons: PokemonType[] } = {
  pokedexPokemons: [],
};

export const pokedexSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
    reduceSearchDevice: (state) => {},
  },
});

// export const { getPokedex } = pokedexSlice.actions;

export const selecktPokedex = (state: RootState) =>
  state.pokedex.pokedexPokemons;

export default pokedexSlice.reducer;
