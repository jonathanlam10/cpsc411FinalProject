// ViewAllEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { getEntryList } from './NutritionEntryList';
import { useNavigation } from '@react-navigation/native';

const ViewAllEntriesScreen = () => {
  const navigation = useNavigation();
  const entryList = getEntryList();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text>All Entries:</Text>
        {entryList.map((entry, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('EntryDetails', { entry })}
          >
            <View>
              <Text>{entry.foodName}</Text>
              <Text>{entry.calories} calories</Text>
              {/* PlaceHolder */}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ViewAllEntriesScreen;

