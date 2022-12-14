import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomInt } from "helpers/getRandomInt";
import { RootState } from "store/store";
import { PokemonType } from "../pokedex/types/pokemon.type";
import { v4 as uuid } from "uuid";

const addPrefixZero = (id: string) => {
  while (id.toString().length < 3) {
    id = 0 + id.toString();
  }
  return id;
};

const initialState: {
  pokemon: PokemonType;
} = {
  pokemon: {
    id: "Pikachuy",
    pokemonNum: "fsad",
    name: "Pikachuy",
    type: "Electric",
    attack: 334,
    defence: 43,
    expirience: 34,
    hp: 33,
    currentHp: 33,
    lvl: 1,
  },
};

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (pokemon, thunkAPI) => {
    const response = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(0, 800)}`)
    ).json();
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {
    hitPokemon: (state, { payload }: PayloadAction<number>) => {
      state.pokemon.hp = state.pokemon.hp - payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      const pokemon = {
        id: uuid(),
        pokemonNum: addPrefixZero(action.payload.id),
        name: action.payload.name,
        type: action.payload.types[0].type.name,
        attack: action.payload.stats[1].base_stat,
        defence: action.payload.stats[2].base_stat,
        expirience: action.payload.base_experience,
        hp: action.payload.stats[0].base_stat,
        currentHp: action.payload.stats[0].base_stat,
        lvl: 1,
      };
      state.pokemon = pokemon;
    });
  },
});
export const { hitPokemon } = pokemonSlice.actions;

export const selecktPokemon = (state: RootState) => state.pokemon.pokemon;

export default pokemonSlice.reducer;
