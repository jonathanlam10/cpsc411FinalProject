// AboutScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const AboutScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    try {
      if (navigation) {
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error navigating back:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stay on Track!</Text>
      <Text style={styles.subtitle}>About: </Text>
      <Text style={styles.subtitle}>
        If you're like me and struggle with not eating enough or (in my case) eating too much, looking for a great app
        to track your daily nutrition is essential. My app "Stay on Track!" will help anyone effortlessly keep track of
        nutrition management and reach their goals. While there are a numerous amount of fitness apps out there, this is
        the only app you will ever need again!
      </Text>
      <Text style={styles.subtitle}>Features: </Text>
      <Text style={styles.subtitle}>- Users can track daily nutrition </Text>
            <Text style={styles.subtitle}>- Users save nutrition information of food for later </Text>
            <Text style={styles.subtitle}>- Users can look at previous data entries </Text>
            <Text style={styles.subtitle}>- Users can set nutrition goals </Text>
            <Text style={styles.subtitle}>- Users can see if they reached their goals  </Text>
            <Text style={styles.subtitle}>Check out the project on GitHub:</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/jonathanlam10/cpsc411FinalProject')}>
              <Text style={styles.link}>https://github.com/jonathanlam10/cpsc411FinalProject</Text>
            </TouchableOpacity>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
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
    backgroundColor: 'lightblue',
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
  backButton: {
    position: 'absolute',
    top: 780,
    left: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AboutScreen;
