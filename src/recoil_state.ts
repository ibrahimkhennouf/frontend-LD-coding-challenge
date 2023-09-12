import { atom, selector } from 'recoil';
import { filterPok } from './utils';

export interface Pokemon {
  name: string;
  type: Array<string>;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power: number;
}

const poksListState = atom<Pokemon[]>({
  key: 'poksListState',
  default: fetch('/pokemon.json')
    .then((res) => res.json())
    .then((data) =>
      data.map((pok: Pokemon) => ({
        ...pok,
        power:
          pok.hp +
          pok.attack +
          pok.defense +
          pok.special_attack +
          pok.special_defense +
          pok.speed,
      }))
    ),
});

const pageMetaData = atom({
  key: 'pageMetaData',
  default: { page: 0, pageSize: 5 },
});

const pokFilterValue = atom<{ name: string; val: string | number }>({
  key: 'pokFilterValue',
  default: { name: 'name', val: '' },
});

const filteredPokList = selector({
  key: 'filteredPokList',
  get: ({ get }) => {
    const list = get(poksListState);
    const { name, val } = get(pokFilterValue);

    return filterPok(list, name, val);
  },
});

export { poksListState, pageMetaData, filteredPokList, pokFilterValue };
