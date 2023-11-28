// NutritionTrackerApp.tsx
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionEntryForm from './NutritionEntryForm';
import NutritionEntryList from './NutritionEntryList';
import AboutScreen from './AboutScreen';
import HomePage from './HomePage';
import TodayEntriesScreen from './TodayEntriesScreen';
import { getEntryList } from './NutritionEntryList'; // Import getEntryList

const Stack = createStackNavigator();

const NutritionTrackerApp = () => {
  const navigationRef = React.useRef(null);

  useEffect(() => {
    // Additional setup code if needed
  }, []);

  const HomeScreenComponent = () => (
    <HomePage
      navigationRef={navigationRef}
    />
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreenComponent} />
        <Stack.Screen name="NutritionEntryForm" component={NutritionEntryForm} />
        <Stack.Screen name="TodayEntries" component={TodayEntriesScreen} />
        <Stack.Screen name="About" component={() => <AboutScreen navigationRef={navigationRef} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NutritionTrackerApp;
