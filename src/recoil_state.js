import { atom, selector } from 'recoil';

const poksListState = atom({
  key: 'poksListState',
  default: fetch('/pokemon.json')
    .then((res) => res.json())
    .then((data) => {
      return data.map((pok) => {
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
    }),
});

const pageMetaData = atom({
  key: 'pageMetaData',
  default: { page: 0, pageSize: 5 },
});

const pokFilterValue = atom({
  key: 'pokFilterValue',
  default: '',
});

const filteredPokList = selector({
  key: 'filteredPokList',
  get: ({ get }) => {
    const list = get(poksListState);
    const filterValue = get(pokFilterValue);

    if (typeof filterValue === 'string') {
      return list.filter((pok) => pok.name.includes(filterValue));
    } else {
      return list.filter((pok) => pok.power >= filterValue);
    }
  },
});

export { poksListState, pageMetaData, filteredPokList, pokFilterValue };
