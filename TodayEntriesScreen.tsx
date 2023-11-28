// TodayEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text>Today's Calories: {dailyCalories}</Text>
        <Text>Entries:</Text>
        {entryList.map((entry, index) => (
          <TouchableOpacity key={index} onPress={() => handleEditEntry(index)}>
            <View style={styles.entryContainer}>
              <Text>{entry.foodName}</Text>
              <Text>{entry.calories} calories</Text>
              {/* placeholder */}
            </View>
          </TouchableOpacity>
        ))}
        {/* placeholder */}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  backButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodayEntriesScreen;
