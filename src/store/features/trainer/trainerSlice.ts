import { createSlice } from "@reduxjs/toolkit";
import { CANDY_PRICE, MEDPACK_PRICE, POKEBALL_PRICE } from "constant/prices";
import { RootState } from "store/store";

const initialState = {
  backpack: {
    candy: 0,
    searchDevice: 300,
    pokeball: 3,
    medpack: 0,
    bioInformation: 0,
    money: 1000,
  },
};

export const trainserSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
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
      state.backpack.pokeball = state.backpack.medpack + 1;
      state.backpack.money = state.backpack.money - MEDPACK_PRICE;
    },
  },
});

export const {
  reduceSearchDevice,
  reducePokeball,
  buyPokeball,
  buyMedpack,
  buyCandy,
} = trainserSlice.actions;

export const selecktBackpack = (state: RootState) => state.trainer.backpack;

export default trainserSlice.reducer;
