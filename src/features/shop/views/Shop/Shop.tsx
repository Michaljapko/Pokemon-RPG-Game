import {
  CANDY_PRICE,
  MEDPACK_PRICE,
  POKEBALL_PRICE,
  SEARCHDEVICE_PRICE,
} from "constant/prices";
import {
  buyCandy,
  buyMedpack,
  buyPokeball,
  buySearchDevice,
  selecktUnsoldPhoto,
  sellBio,
  sellPhoto,
} from "features/trainer/trainerSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

const Shop = () => {
  const dispatch = useAppDispatch();
  const numUnsoldPhoto = useAppSelector(selecktUnsoldPhoto).length;
  return (
    <div>
      <h3>Shop</h3>
      <button>Sell Pokemon </button>
      <button onClick={() => dispatch(sellBio())}>Sell BioInformation </button>
      <button onClick={() => dispatch(sellPhoto())}>
        Sell Pokemon Photo ({numUnsoldPhoto})
      </button>
      <button onClick={() => dispatch(buyPokeball())}>
        Buy Pokeball ({POKEBALL_PRICE})
      </button>
      <button onClick={() => dispatch(buySearchDevice())}>
        Buy Search Device ({SEARCHDEVICE_PRICE})
      </button>
      <button onClick={() => dispatch(buyCandy())}>
        Buy Candy ({CANDY_PRICE})
      </button>
      <button onClick={() => dispatch(buyMedpack())}>
        Medpack ({MEDPACK_PRICE})
      </button>
    </div>
  );
};

export default Shop;
