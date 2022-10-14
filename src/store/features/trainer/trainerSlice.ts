import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

const initialState = {
  backpack: {
    candy: 0,
    searchDevice: 3,
    pokeball: 0,
    medpack: 0,
    bioInformation: 0,
    money: 0,
  },
};

export const trainserSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
    reduceSearchDevice: (state) => {
      state.backpack.searchDevice = state.backpack.searchDevice - 1;
    },
  },
});

export const { reduceSearchDevice } = trainserSlice.actions;

export const selecktBackpack = (state: RootState) => state.trainer.backpack;

export default trainserSlice.reducer;
