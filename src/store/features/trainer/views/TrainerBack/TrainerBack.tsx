import { useAppSelector } from "store/hooks";
import { selecktBackpack } from "../../trainerSlice";

const TrainerBack = () => {
  const backpack = useAppSelector(selecktBackpack);
  return (
    <div>
      <p>Candy: {backpack.candy}</p>
      <p>searchDevice: {backpack.searchDevice}</p>
      <p>pokeball: {backpack.pokeball}</p>
      <p>medpack: {backpack.medpack}</p>
      <p>bioInformation: {backpack.bioInformation}</p>
      <p>money: {backpack.money}</p>
    </div>
  );
};

export default TrainerBack;
