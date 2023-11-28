// NutritionEntryForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
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
      <Button title="Add Entry" onPress={handleAddEntry} />
      <Button title="Back" onPress={() => navigation.goBack()} />
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
});

export default NutritionEntryForm;
