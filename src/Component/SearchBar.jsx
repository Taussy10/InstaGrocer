import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Fruits } from '../Data/Data';
const SearchBar = () => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  // Function to handle search
  const handleSearch = () => {
    // Perform search logic here
    const results = Fruits.filter((fruit) => fruit.name.toLowerCase().includes(input.toLowerCase()));
    setSearchResults(results);
  };

  // Function to navigate to search details screen
  const goToSearchDetails = () => {
    navigation.navigate('SearchDetails', { data: searchResults });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search Groceries"
        keyboardType="default"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSearchDetails} style={styles.button}>
        <Text>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: responsiveHeight(7),
    width: responsiveWidth(70),
    borderRadius: 15,
    borderColor: 'black',
    marginVertical: 12,
    borderWidth: 2,
    padding: 10,
  },
  button: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
  },
});

export default SearchBar;
