//NutritionTrackerApp.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionEntryForm from './NutritionEntryForm';
import NutritionEntryList from './NutritionEntryList';
import AboutScreen from './AboutScreen';
import HomePage from './HomePage';
import TodayEntriesScreen from './TodayEntriesScreen';
import EditEntryScreen from './EditEntryScreen';
import SetGoalScreen from './SetGoalScreen';
import SearchScreen from './SearchScreen';
import ViewAllEntriesScreen from './ViewAllEntriesScreen';


const Stack = createStackNavigator();

const NutritionTrackerApp = () => {
  const navigationRef = React.useRef(null);
  const [goalCalories, setGoalCalories] = useState(0);

  useEffect(() => {
    // placeholder
  }, []);

  const HomeScreenComponent = () => (
    <HomePage
      navigationRef={navigationRef}
      goalCalories={goalCalories}
      setGoalCalories={setGoalCalories}
    />
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreenComponent} />
        <Stack.Screen name="NutritionEntryForm" component={NutritionEntryForm} />
        <Stack.Screen name="TodayEntries" component={TodayEntriesScreen} />
        <Stack.Screen name="About" component={() => <AboutScreen navigationRef={navigationRef} />} />
        <Stack.Screen name="EditEntry" component={EditEntryScreen} />
        <Stack.Screen name="SetGoal" component={SetGoalScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ViewAllEntries" component={ViewAllEntriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
export default NutritionTrackerApp;
