export const setItemDB = (nameItem, valueItem) =>
  localStorage.setItem(nameItem, JSON.stringify(valueItem));
export const removeItemDB = (nameItem) => localStorage.removeItem(nameItem);

export const getItemDB = (valueItem) => JSON.parse(localStorage[valueItem]);
