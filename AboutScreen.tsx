// AboutScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleStartPress = () => {
    // Navigate to the 'Home' screen
    if (navigation) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stay on Track!</Text>
      <Text style={styles.subtitle}>Check out the project on GitHub:</Text>
      <TouchableOpacity onPress={() => window.open('https://github.com/jonathanlam10/cpsc411FinalProject')}>
        <Text style={styles.link}>https://github.com/jonathanlam10/cpsc411FinalProject</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStartPress}>
        <View style={styles.startButton}>
          <Text style={styles.startButtonText}>START</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 20,
  },
  startButton: {
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutScreen;
