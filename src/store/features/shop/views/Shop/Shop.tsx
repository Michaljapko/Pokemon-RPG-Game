import { CANDY_PRICE, MEDPACK_PRICE, POKEBALL_PRICE } from "constant/prices";
import { buyCandy, buyMedpack, buyPokeball } from "store/features/trainer/trainerSlice";
import { useAppDispatch } from "store/hooks";

const Shop = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>Shop</h3>
      <button>Sell Pokemon </button>
      <button>Sell BioInformation </button>
      <button>Sell Pokemon Photo </button>
      <button onClick={() => dispatch(buyPokeball())}>
        Buy Pokeball ({POKEBALL_PRICE})
      </button>
      <button onClick={() => dispatch(buyCandy())}>
        Buy Pokeball ({CANDY_PRICE})
      </button>
      <button onClick={() => dispatch(buyMedpack())}>
        Medpack ({MEDPACK_PRICE})
      </button>
    </div>
  );
};

export default Shop;
