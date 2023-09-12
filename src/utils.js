export const filterPok = (pokList, name, val) => {
  switch (name) {
    case 'name':
      return pokList.filter((pok) => pok.name.includes(val));

    case 'type':
      return pokList.filter((pok) => pok.type.toString().includes(val));

    default:
      return pokList.filter((pok) => pok[name] >= val);
  }
};
