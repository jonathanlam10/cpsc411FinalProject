// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getEntryList } from './NutritionEntryList';

const HomePage = ({ navigationRef, goalCalories, setGoalCalories }) => {
  const [localDailyCalories, setLocalDailyCalories] = useState(0);

  const calculateTotalCalories = (entries) => {
    return entries.reduce((totalCalories, entry) => totalCalories + entry.calories, 0);
  };

  const updateCalories = () => {
    const entries = getEntryList();
    const totalCalories = calculateTotalCalories(entries);
    setLocalDailyCalories(totalCalories);
  };

  useFocusEffect(
    React.useCallback(() => {
      // This will be called when the screen is focused
      updateCalories();
    }, [])
  );

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

  const handleSetGoal = () => {
    if (navigationRef) {
      navigationRef.current.navigate('SetGoal', {
        goalCalories,
        setGoalCalories,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Daily Calories:</Text>
      <Text style={styles.calories}>{localDailyCalories} / {goalCalories}</Text>
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
      <TouchableOpacity style={styles.setGoalButton} onPress={handleSetGoal}>
        <Text style={styles.setGoalButtonText}>Set Goal</Text>
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
  setGoalButton: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      backgroundColor: 'orange', // Change the color as needed
      padding: 10,
      borderRadius: 5,
    },
    setGoalButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
});

export default HomePage;
