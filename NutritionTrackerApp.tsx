// NutritionTrackerApp.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionEntryForm from './NutritionEntryForm';
import NutritionEntryList from './NutritionEntryList';
import AboutScreen from './AboutScreen';
import HomePage from './HomePage';
import TodayEntriesScreen from './TodayEntriesScreen';

const Stack = createStackNavigator();

const NutritionTrackerApp = () => {
  const navigationRef = React.useRef(null);
  const [dailyCalories, setDailyCalories] = useState(0);

  // Define the onAddEntry function here
  const handleAddEntry = (calories) => {
    setDailyCalories((prevCalories) => prevCalories + calories);
  };

  const HomeScreenComponent = () => (
    <HomePage
      dailyCalories={dailyCalories}
      navigationRef={navigationRef}
    />
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="About" headerMode="none">
        <Stack.Screen name="About" component={() => <AboutScreen navigationRef={navigationRef} />} />
        <Stack.Screen
          name="NutritionTracker"
          component={() => (
            <View>
              {/* Pass the onAddEntry prop directly to NutritionEntryForm */}
              <NutritionEntryForm
                onAddEntry={handleAddEntry}
              />
              <NutritionEntryList />
            </View>
          )}
        />
        <Stack.Screen name="Home" component={HomeScreenComponent} />
        <Stack.Screen name="TodayEntries" component={TodayEntriesScreen} />
        <Stack.Screen name="NutritionEntryForm" component={NutritionEntryForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NutritionTrackerApp;
