// ViewAllEntriesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
            {/* PlaceHolder */}
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
               <Text style={styles.backButtonText}>Back</Text>
             </TouchableOpacity>
           </View>
  );
};

const styles = StyleSheet.create({
   backButton: {
     position: 'absolute',
     bottom: -680,
     left: 10,
     backgroundColor: 'gray', // Set your desired color here
     padding: 10,
     borderRadius: 5,
   },
   backButtonText: {
     color: 'white',
     fontWeight: 'bold',
   },
 });

export default ViewAllEntriesScreen;
