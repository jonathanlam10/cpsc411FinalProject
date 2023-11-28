// ViewAllEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { getEntryList } from './NutritionEntryList';
import { useNavigation } from '@react-navigation/native';

const groupEntriesByDate = (entries) => {
  const groupedEntries = {};

  entries.forEach((entry) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    if (!groupedEntries[formattedDate]) {
      groupedEntries[formattedDate] = [];
    }

    groupedEntries[formattedDate].push(entry);
  });

  return groupedEntries;
};

const ViewAllEntriesScreen = () => {
  const navigation = useNavigation();
  const entryList = getEntryList();
  const groupedEntries = groupEntriesByDate(entryList);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {Object.keys(groupedEntries).map((date) => (
          <View key={date}>
            <Text style={styles.dateHeading}>{date}</Text>
            {groupedEntries[date].map((entry, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('EntryDetails', { entry })}
              >
                <View style={styles.entryContainer}>
                  <Text>{entry.foodName}</Text>
                  <Text>{entry.calories} calories</Text>
                  {/* Placeholder */}
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  dateHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
  },
  entryContainer: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
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
