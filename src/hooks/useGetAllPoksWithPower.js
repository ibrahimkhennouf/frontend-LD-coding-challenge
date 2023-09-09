import { useRecoilValue } from "recoil";
import { poksListState } from "../recoil_state";

function useGetAllPoksWithPower() {
  const poksList = useRecoilValue(poksListState);

  const poksListWithPower = poksList.map((pok) => {
    return {
      ...pok,
      power:
        pok.hp +
        pok.attack +
        pok.defense +
        pok.special_attack +
        pok.special_defense +
        pok.speed,
    };
  });

  return poksListWithPower;
}

export default useGetAllPoksWithPower;
