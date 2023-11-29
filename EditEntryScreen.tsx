// EditEntry.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getEntryList, entryList } from './NutritionEntryList';

const EditEntry = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { entryIndex } = route.params || {};
  const [foodName, setFoodName] = useState(entryList[entryIndex]?.foodName || '');
  const [calories, setCalories] = useState(entryList[entryIndex]?.calories || '');

  const handleSaveChanges = () => {
    // Update the entry in the list
    entryList[entryIndex] = {
      foodName: foodName,
      calories: parseInt(calories, 10),
    };

    // Navigate back to TodayEntriesScreen or update UI as needed
    navigation.goBack();
  };

  const handleDeleteEntry = () => {
    // Remove the entry from the list
    entryList.splice(entryIndex, 1);

    // Navigate back to TodayEntriesScreen or update UI as needed
    navigation.goBack();
  };

  return (
      <View style={styles.container}>
        <Text>Edit Entry</Text>
        <TextInput
          style={styles.input}
          placeholder="Food Name"
          value={foodName}
          onChangeText={(text) => setFoodName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Calories"
          value={calories.toString()}
          onChangeText={(text) => setCalories(text)}
          keyboardType="numeric"
        />

        {/* Replace the default Button with TouchableOpacity */}
        <TouchableOpacity style={styles.saveChangesButton} onPress={handleSaveChanges}>
          <Text style={styles.saveChangesButtonText}>Save</Text>
        </TouchableOpacity>

        {/* Add a Delete button */}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteEntry}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  deleteButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  saveChangesButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  saveChangesButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditEntry;
