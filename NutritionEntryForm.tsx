// NutritionEntryForm.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addEntryToList } from './NutritionEntryList';

const NutritionEntryForm = ({ onAddEntry }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const navigation = useNavigation();

  const handleAddEntry = () => {
    const entry = {
      foodName: foodName,
      calories: parseInt(calories, 10),
    };

    addEntryToList(entry);

    setFoodName('');
    setCalories('');

    navigation.navigate('Home');
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
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
