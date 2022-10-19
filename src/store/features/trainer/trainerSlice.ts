import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BIOINFO_PRICE,
  CANDY_PRICE,
  MEDPACK_PRICE,
  PHOTO_PRICE,
  POKEBALL_PRICE,
  POKEMON_PRICE_RATE,
  SEARCHDEVICE_PRICE,
} from "constant/prices";
import { RootState } from "store/store";
import { PokemonType } from "../pokedex/types/pokemon.type";
import { calculateCP } from "../pokemon/helpers/calculateCP";

const initialState: {
  backpack: {
    candy: number;
    searchDevice: number;
    pokeball: number;
    medpack: number;
    bioInformation: number;
    money: number;
  };
  photographedPokemon: string[];
  soldPhoto: string[];
  pokedex: PokemonType[];
} = {
  backpack: {
    candy: 0,
    searchDevice: 300,
    pokeball: 3,
    medpack: 0,
    bioInformation: 0,
    money: 1000,
  },
  photographedPokemon: [],
  soldPhoto: [],
  pokedex: [],
};

export const trainserSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
    addMedpack: (state) => {
      state.backpack.medpack = state.backpack.medpack + 1;
    },
    addPokeball: (state) => {
      state.backpack.pokeball = state.backpack.pokeball + 1;
    },
    addBio: (state) => {
      state.backpack.bioInformation = state.backpack.bioInformation + 1;
    },
    addCandy: (state) => {
      state.backpack.candy = state.backpack.candy + 1;
    },
    reduceSearchDevice: (state) => {
      state.backpack.searchDevice = state.backpack.searchDevice - 1;
    },
    reducePokeball: (state) => {
      state.backpack.pokeball = state.backpack.pokeball - 1;
    },
    buyPokeball: (state) => {
      state.backpack.pokeball = state.backpack.pokeball + 1;
      state.backpack.money = state.backpack.money - POKEBALL_PRICE;
    },
    buyCandy: (state) => {
      state.backpack.pokeball = state.backpack.candy + 1;
      state.backpack.money = state.backpack.money - CANDY_PRICE;
    },
    buyMedpack: (state) => {
      state.backpack.medpack = state.backpack.medpack + 1;
      state.backpack.money = state.backpack.money - MEDPACK_PRICE;
    },
    buySearchDevice: (state) => {
      state.backpack.searchDevice = state.backpack.searchDevice + 1;
      state.backpack.money = state.backpack.money - SEARCHDEVICE_PRICE;
    },
    takePhoto: (state, { payload }: PayloadAction<string>) => {
      state.photographedPokemon = [...state.photographedPokemon, payload];
    },
    sellPhoto: (state) => {
      state.backpack.money =
        state.backpack.money + state.photographedPokemon.length * PHOTO_PRICE;
      state.soldPhoto = [...state.photographedPokemon, ...state.soldPhoto];
      state.photographedPokemon = [];
    },

    sellBio: (state) => {
      state.backpack.money =
        state.backpack.money + state.backpack.bioInformation * BIOINFO_PRICE;
      state.backpack.bioInformation = 0;
    },
    sellPokemon: (state, { payload }: PayloadAction<PokemonType>) => {
      state.backpack.money =
        state.backpack.money + calculateCP(payload) * POKEMON_PRICE_RATE;
      state.pokedex = state.pokedex.filter(
        (pokemon) => pokemon.id !== payload.id
      );
    },
    catchPokemon: (state, { payload }: PayloadAction<PokemonType>) => {
      state.pokedex = [payload, ...state.pokedex];
    },
  },
});

export const {
  addMedpack,
  addBio,
  addCandy,
  addPokeball,
  reduceSearchDevice,
  reducePokeball,
  buyPokeball,
  buyMedpack,
  buySearchDevice,
  buyCandy,
  takePhoto,
  sellPhoto,
  sellBio,
  sellPokemon,
  catchPokemon,
} = trainserSlice.actions;

export const selecktBackpack = (state: RootState) => state.trainer.backpack;
export const selecktUnsoldPhoto = (state: RootState) =>
  state.trainer.photographedPokemon;
export const selecktPhotographedPokemon = (state: RootState) =>
  state.trainer.photographedPokemon.concat(state.trainer.soldPhoto);
export const selecktPokedex = (state: RootState) => state.trainer.pokedex;

export default trainserSlice.reducer;
