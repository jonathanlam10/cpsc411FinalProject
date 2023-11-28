// NutritionEntryList.tsx
export const entryList = [];

export const addEntryToList = (entry) => {
  entryList.push(entry);
  console.log('Entry added:', entryList);
};

export const removeEntryFromList = (index) => {
  entryList.splice(index, 1);
  console.log('Entry removed:', entryList);
};

export const getEntryList = () => {
  return entryList;
};
