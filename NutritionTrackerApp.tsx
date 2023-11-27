// NutritionTrackerApp.tsx
import React, { useState, useEffect } from 'react';
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
  const [entryList, setEntryList] = useState([]);

  const handleAddEntry = (calories) => {
    setDailyCalories((prevCalories) => prevCalories + calories);
    setEntryList([...entryList, { calories }]); // Update entryList when a new entry is added
  };

  // Update dailyCalories and entryList when the component mounts
  useEffect(() => {
    // Pass the function to NutritionEntryForm
    navigationRef.current.setParams({ onAddEntry: handleAddEntry });
  }, []);

  const HomeScreenComponent = () => (
    <HomePage
      dailyCalories={dailyCalories}
      navigationRef={navigationRef}
      entryList={entryList} // Pass entryList as a prop
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
