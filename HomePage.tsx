// HomePage.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getEntryList } from './NutritionEntryList';

const HomePage = ({ navigationRef }) => {
  const entryList = getEntryList();

  const dailyCalories = entryList.reduce((totalCalories, entry) => totalCalories + entry.calories, 0);

  const handleAddEntry = () => {
    if (navigationRef) {
      navigationRef.current.navigate('NutritionEntryForm');
    }
  };

  const handleShowEntries = () => {
    if (navigationRef) {
      navigationRef.current.navigate('TodayEntries');
    }
  };

  return (
    <View style={styles.container}>
          <Text style={styles.title}>Your Daily Calories:</Text>
          <Text style={styles.calories}>{dailyCalories}</Text>
          <TouchableOpacity onPress={handleAddEntry}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonLabel}>Add New Entry</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShowEntries}>
            <View style={styles.showEntriesButton}>
              <Text style={styles.showEntriesButtonLabel}>Show Today's Entries</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.aboutButton}
            onPress={() => navigationRef.current.navigate('About')}
          >
            <Text style={styles.aboutButtonText}>About</Text>
          </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  calories: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  showEntriesButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  showEntriesButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
   aboutButton: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: 'purple',
      padding: 10,
      borderRadius: 5,
    },
    aboutButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});

export default HomePage;
