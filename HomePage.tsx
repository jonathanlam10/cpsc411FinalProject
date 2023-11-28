// HomePage.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getEntryList } from './NutritionEntryList';
import Sound from 'react-native-sound';

const HomePage = ({ navigationRef, goalCalories, setGoalCalories }) => {
  const [localDailyCalories, setLocalDailyCalories] = useState(0);
  const [soundPlayed, setSoundPlayed] = useState(false); // Track whether the sound has been played
  const navigation = useNavigation();

  const goalReachedSound = new Sound(require('./assets/audio/goalReached.mp3'), (error) => {
    if (error) {
      console.error('Error loading sound:', error);
    }
  });

  const calculateTotalCalories = (entries) => {
    return entries.reduce((totalCalories, entry) => totalCalories + entry.calories, 0);
  };

  const updateCalories = () => {
    const entries = getEntryList();
    const totalCalories = calculateTotalCalories(entries);
    setLocalDailyCalories(totalCalories);

    // Check if daily calories equal set goal calories and sound hasn't been played
    if (localDailyCalories === goalCalories && !soundPlayed) {
      // Play the sound
      goalReachedSound.play((success) => {
        if (success) {
          // Mark that the sound has been played
          setSoundPlayed(true);
        } else {
          //console.error('Error playing sound');
        }
      });
    }

    // Check if calories have changed, reset soundPlayed state
    if (localDailyCalories !== goalCalories) {
      setSoundPlayed(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      updateCalories();
    }, [localDailyCalories, goalCalories, soundPlayed])
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

  const handleSearch = () => {
    if (navigationRef) {
      navigationRef.current.navigate('Search');
    }
  };

  const handleViewAllEntries = () => {
    if (navigationRef) {
      navigationRef.current.navigate('ViewAllEntries');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Daily Calories:</Text>
      <Text style={styles.calories}>
        {localDailyCalories} / {goalCalories}
      </Text>
      <TouchableOpacity onPress={handleAddEntry}>
        <View style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add New Entry</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShowEntries}>
        <View style={styles.showEntriesButton}>
          <Text style={styles.showEntriesButtonLabel}>Today's Entries</Text>
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
      <TouchableOpacity onPress={handleSearch}>
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewAllEntriesButton} onPress={handleViewAllEntries}>
        <Text style={styles.viewAllEntriesButtonText}>View All Entries</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  showEntriesButton: {
    backgroundColor: 'lightblue',
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
    backgroundColor: 'lightblue',
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
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  setGoalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchButton: {
    position: 'absolute',
    bottom: 467,
    right: -185,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  viewAllEntriesButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  viewAllEntriesButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomePage;

