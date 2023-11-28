// ViewAllEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { getEntryList } from './NutritionEntryList';
import { useNavigation } from '@react-navigation/native';

const ViewAllEntriesScreen = () => {
  const navigation = useNavigation();
  const entryList = getEntryList();

  return (
    <View>
      <Text>All Entries:</Text>
      {entryList.map((entry, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('EntryDetails', { entry })}
        >
          <View>
            <Text>{entry.foodName}</Text>
            <Text>{entry.calories} calories</Text>
            {/* Add more details if needed */}
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10, borderRadius: 5, marginTop: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllEntriesScreen;
