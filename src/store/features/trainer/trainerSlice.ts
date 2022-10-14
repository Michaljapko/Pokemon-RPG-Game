import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

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

export const trainserSlice = createSlice({
  name: "trainserSlice",
  initialState,
  reducers: {
    useCandy: (state, payload) => {
      state.backpack.candy = 6;
    },
  },
});

export const selecktBackpack = (state: RootState) => state.trainer.backpack;

export default trainserSlice.reducer;
