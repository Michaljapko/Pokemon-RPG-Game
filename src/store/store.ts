import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokedexSlice from "./features/pokedex/pokedexSlice";
import pokemonSlice from "./features/pokemon/pokemonSlice";
import trainserSlice from "./features/trainer/trainerSlice";

export const store = configureStore({
  reducer: {
    trainer: trainserSlice,
    pokemon: pokemonSlice,
    pokedex: pokedexSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
