import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import {  useDispatch, useSelector } from 'react-redux'
 import filter from 'lodash.filter'
import { Fruits } from '../Data/Data'

 import CartSlice from '../Redux/CartSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
const SearchBar = () => {
  const storeData =  useSelector((state) =>state.CartSlice )  
  // const storeData = useSelector((state) => state.CartSlice);
console.log(storeData, "Searchbar");
console.log(Fruits[0].name  , "I got fruit name");  
  const dispatch = useDispatch() 

 
  return (
    <SafeAreaView >
     
      <TextInput style={styles.input} 
      placeholder='Search Groceries'
        keyboardType="default"
        
      /> 

<View> 
  
   </View>
    </SafeAreaView>
   
  
  )
}

export default SearchBar

const styles = StyleSheet.create({
  input:{
    height: responsiveHeight(7) ,
    width: responsiveWidth(70) ,
    borderRadius: 15,
    borderColor:'black',
    margin: 12,
    borderWidth: 2,
    padding: 10,
  }
})