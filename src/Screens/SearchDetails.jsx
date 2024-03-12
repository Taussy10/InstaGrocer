import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fruits } from '../Data/Data'

const SearchDetails = ({route}) => {
    const data = route.params.data
    console.log(data , "serchDtals");
    console.log(data, "details");
  return (
    <SafeAreaView>
      <Text>SearchDetails</Text>
      <FlatList 
      data={data}
      renderItem={({item}) =>
      (

        <View>
     <Text>{item.name}</Text>
        </View>
      ) }
      />
      
    </SafeAreaView>
  )
}

export default SearchDetails

const styles = StyleSheet.create({})