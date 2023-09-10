import { useRecoilValue } from 'recoil';
import { filteredPokList, pageMetaData } from '../recoil_state';

function useGetMinMaxPower() {
  const { page, pageSize } = useRecoilValue(pageMetaData);

  const poksList = useRecoilValue(filteredPokList);

  const currentRows = poksList.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  const currentPower = currentRows.map((cp) => cp.power);

  return {
    max: Math.max(...currentPower),
    min: Math.min(...currentPower),
  };
}

export default useGetMinMaxPower;
