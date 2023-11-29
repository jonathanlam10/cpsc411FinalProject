// SetGoalScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import BackButton from './BackButton'; // Import the BackButton component

const SetGoalScreen = ({ route, navigation }) => {
  const { goalCalories, setGoalCalories } = route.params || {};
  const [calories, setCalories] = useState(`${goalCalories}`); // Convert goalCalories to string

  const handleSaveGoal = () => {
    const newGoalCalories = parseInt(calories, 10);
    setGoalCalories(newGoalCalories); // Update goalCalories
    navigation.goBack();
  };

  return (
  <ImageBackground style={styles.background} source={require('./assets/icon.jpg')}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Goal Calories"
        value={calories}
        onChangeText={(text) => setCalories(text)}
        keyboardType="numeric"
      />
      <Button title="Save Goal" onPress={handleSaveGoal} />

      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
         width: '100%',
         height: '80%',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    //backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  backButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'gray', // Set your desired color here
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SetGoalScreen;
