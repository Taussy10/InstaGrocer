import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const OrderPlaced = ({route}) => {
    const productData = route.params.main;
    console.log(productData , "coming from Cart");
    
    // StoreData = it has state of cartSlice  basically all the data 
    // e.g. storedata: [{"name": "apple" "quantity": 1}] all the things same but quantity buy default 1 

    // ProductData  = it is navigator who has data and navigating from one place to another so it's dyanimic sometimes 0 data someitmes all data  it increases the number 
       // e.g. storedata: [{"name": "apple" "quantity": NAN}] all the things same but quantity currenlty NAN cause I haven't added if I add 

    const storeData = useSelector((state) => state.CartSlice);

 console.log(storeData , "Storedata");
 console.log(productData, "Productdata");
 

  
    // console.log(name);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:"white",  alignItems:'center', padding:20 , justifyContent:'center'}}>
            <Text style={{fontSize: 30, color:'green'}}>Thanks for ordering </Text>

    </SafeAreaView>
  )
}

export default OrderPlaced

const styles = StyleSheet.create({})