// TodayEntriesScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { getEntryList } from './NutritionEntryList';

const TodayEntriesScreen = ({ navigation }) => {
  const entryList = getEntryList();

  // Calculate today's calories
  const dailyCalories = entryList.reduce((totalCalories, entry) => {
    return totalCalories + entry.calories;
  }, 0);

  return (
    <View>
      <Text>Today's Calories: {dailyCalories}</Text>
      <Text>Entries:</Text>
      {entryList.map((entry, index) => (
        <View key={index}>
          <Text>{entry.foodName}</Text>
          <Text>{entry.calories} calories</Text>
          {/* Add more details if needed */}
        </View>
      ))}
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TodayEntriesScreen;
