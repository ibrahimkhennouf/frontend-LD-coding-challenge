import { atom, selector } from "recoil";

const poksListState = atom({
  key: "poksListState",
  default: fetch("/pokemon.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    }),
});

export { poksListState };
