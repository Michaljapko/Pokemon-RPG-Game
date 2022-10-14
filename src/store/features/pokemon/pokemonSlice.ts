import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRandomInt } from "helpers/getRandomInt";
import { RootState } from "store/store";

const initialState: {
  pokemon: {
    id: string;
    name: string;
    type: string;
    attack: number;
    defence: number;
    expirience: number;
    hp: number;
    currentHp: number;
  };
} = {
  pokemon: {
    id: "Pikachuy",
    name: "Pikachuy",
    type: "Electric",
    attack: 334,
    defence: 43,
    expirience: 34,
    hp: 33,
    currentHp: 33,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      const pokemon = {
        id: "3234",
        name: action.payload.name,
        type: action.payload.types[0].type.name,
        attack: action.payload.stats[1].base_stat,
        defence: action.payload.stats[2].base_stat,
        expirience: action.payload.base_experience,
        hp: action.payload.stats[0].base_stat,
        currentHp: action.payload.stats[0].base_stat,
      };
      console.log(pokemon);

      state.pokemon = pokemon;
    });
  },
});

export const selecktPokemon = (state: RootState) => state.pokemon.pokemon;

export default pokemonSlice.reducer;
