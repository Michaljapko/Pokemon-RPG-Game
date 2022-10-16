import { selecktPokemon } from "store/features/pokemon/pokemonSlice";
import {
  selecktPhotographedPokemon,
  takePhoto,
} from "store/features/trainer/trainerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const TakePhoto = () => {
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector(selecktPokemon);
  const photographedPokemon = useAppSelector(selecktPhotographedPokemon);
  const isPhotographed = photographedPokemon.includes(pokemon.id);

  return (
    <>
      {!isPhotographed && (
        <button onClick={() => dispatch(takePhoto(pokemon.id))}>
          Take Photo
        </button>
      )}
    </>
  );
};
export default TakePhoto;
