import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CANDY_PRICE,
  MEDPACK_PRICE,
  PHOTO_PRICE,
  POKEBALL_PRICE,
} from "constant/prices";
import { RootState } from "store/store";

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

    takePhoto: (state, { payload }: PayloadAction<string>) => {
      state.photographedPokemon = [...state.photographedPokemon, payload];
    },
    sellPhoto: (state) => {
      state.backpack.money =
        state.backpack.money + state.photographedPokemon.length * PHOTO_PRICE;
      state.soldPhoto = [...state.photographedPokemon, ...state.soldPhoto];
      state.photographedPokemon = [];
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
  buyCandy,
  takePhoto,
  sellPhoto,
} = trainserSlice.actions;

export const selecktBackpack = (state: RootState) => state.trainer.backpack;
export const selecktUnsoldPhoto = (state: RootState) =>
  state.trainer.photographedPokemon;
export const selecktPhotographedPokemon = (state: RootState) =>
  state.trainer.photographedPokemon.concat(state.trainer.soldPhoto);

export default trainserSlice.reducer;
