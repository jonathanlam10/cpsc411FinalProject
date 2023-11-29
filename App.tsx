// App.tsx
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import NutritionTrackerApp from './NutritionTrackerApp';

// Import your background image
const BackgroundImage = require('./assets/icon.jpg'); // Replace with the actual filename of your image

const App = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <NutritionTrackerApp />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your preference
  },
});

export default App;
