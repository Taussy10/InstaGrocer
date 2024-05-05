import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Fruits } from '../Data/Data';
import { FontAwesome } from '@expo/vector-icons';
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
    <View style={styles.container}>

    <View style={styles.SearchBar}>

    <View style={{flexDirection:'row', alignItems:'center', }}>
      <TextInput
        style={styles.input}
        placeholder="Search Your Groceries"
        keyboardType="default"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      {/* style={styles.button} */}
      <TouchableOpacity onPress={handleSearch} >
        {/* <Text style={{ color: 'white',}}>Search</Text> */}
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>
     
    </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'lightblue',
    padding: 20,

  },
  SearchBar:{
    backgroundColor:'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
  },
  input: {
    // height: responsiveHeight(4),
    width: responsiveWidth(75),
    marginVertical: 12,
    color:'lightgrey',
    fontSize: 18
  },

});

export default SearchBar;
