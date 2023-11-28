// NutritionEntryForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addEntryToList } from './NutritionEntryList';

const NutritionEntryForm = ({ route }) => {
  const { onAddEntry } = route.params || {};
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const navigation = useNavigation();

  const handleAddEntry = () => {
    try {
      const entry = {
        foodName: foodName,
        calories: parseInt(calories, 10),
      };

      addEntryToList(entry);

      if (onAddEntry) {
        onAddEntry(entry.calories);
      }

      setFoodName('');
      setCalories('');

      // Uncomment if to navigate home
      // navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Food Name"
        value={foodName}
        onChangeText={(text) => setFoodName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Calories"
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddEntry}
      >
        <Text style={styles.buttonText}>Add Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  addButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NutritionEntryForm;
