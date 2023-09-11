import { atom, selector } from 'recoil';

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

const pokFilterValue = atom<string | number>({
  key: 'pokFilterValue',
  default: '',
});

const filteredPokList = selector({
  key: 'filteredPokList',
  get: ({ get }) => {
    const list = get(poksListState);
    const filterValue = get(pokFilterValue);

    if (typeof filterValue === 'string') {
      return list.filter((pok: Pokemon) => pok.name.includes(filterValue));
    } else {
      return list.filter((pok: Pokemon) => pok.power >= filterValue);
    }
  },
});

export { poksListState, pageMetaData, filteredPokList, pokFilterValue };
