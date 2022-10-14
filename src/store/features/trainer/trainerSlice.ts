import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backpack: {
    candy: 0,
    searchDevice: 0,
    pokeball: 0,
    medpack: 0,
    bioInformation: 0,
    money: 0,
  },
};

export const pokemonSlice = createSlice({
  name: "pokemonSlice",
  initialState,
  reducers: {},
});

export default pokemonSlice.reducer;
