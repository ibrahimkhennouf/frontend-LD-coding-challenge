export const filterPok = (pokList, name, val) => {
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
      return pokList.filter((pok) => pok[name] >= val);
  }
};
