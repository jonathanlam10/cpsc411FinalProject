// SetGoalScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SetGoalScreen = ({ route, navigation }) => {
  const { goalCalories, setGoalCalories } = route.params || {};
  const [calories, setCalories] = useState(`${goalCalories}`); // Convert goalCalories to string

  const handleSaveGoal = () => {
    const newGoalCalories = parseInt(calories, 10);
    setGoalCalories(newGoalCalories); // Update goalCalories
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Goal Calories"
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />
      <Button title="Save Goal" onPress={handleSaveGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  goalInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default SetGoalScreen;
