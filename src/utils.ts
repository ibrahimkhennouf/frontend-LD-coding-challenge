import { Pokemon } from './recoil_state';

export const filterPok = (
  pokList: Pokemon[],
  name: string,
  val: string | number
) => {
  switch (name) {
    case 'name':
      return pokList.filter((pok) =>
        pok.name.toLowerCase().includes(val.toString().toLowerCase())
      );

    case 'type':
      return pokList.filter((pok) =>
        pok.type.toString().toLowerCase().includes(val.toString().toLowerCase())
      );

    default:
      return pokList.filter((pok: any) => pok[name] >= val);
  }
};
