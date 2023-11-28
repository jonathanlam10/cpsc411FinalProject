// TodayEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { getEntryList } from './NutritionEntryList';

const TodayEntriesScreen = ({ navigation }) => {
  const entryList = getEntryList();

  // Calculate today's calories
  const dailyCalories = entryList.reduce((totalCalories, entry) => {
    return totalCalories + entry.calories;
  }, 0);

  const handleEditEntry = (index) => {
    navigation.navigate('EditEntry', { entryIndex: index });
  };

  return (
    <View>
      <Text>Today's Calories: {dailyCalories}</Text>
      <Text>Entries:</Text>
      {entryList.map((entry, index) => (
        <TouchableOpacity key={index} onPress={() => handleEditEntry(index)}>
          <View>
            <Text>{entry.foodName}</Text>
            <Text>{entry.calories} calories</Text>
            {/* placeholder */}
          </View>
        </TouchableOpacity>
      ))}
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TodayEntriesScreen;
