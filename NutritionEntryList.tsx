// NutritionEntryList.ts
let entryList = []; // Your list to store entries

export const addEntryToList = (entry) => {
  entryList.push(entry);
  console.log('Entry added:', entryList); // Optional: Log the updated list
};

export const getEntryList = () => {
  return entryList;
};
