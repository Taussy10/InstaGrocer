import { StyleSheet, Text, View,FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// if you exort like export const Prdouct then you have to put in curly braces cause it's not file it's variable

import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// import Icon from "react-native-vector-icons/EvilIcons"
// first 

import { FontAwesome } from "@expo/vector-icons";

// Redux code 
import { useDispatch, useSelector } from 'react-redux'
import {addToCart , removeFromCart} from '../Redux/CartSlice'



const Item = ({data , navigation}) => {


  // Redux code 
  // CartSlice data coming from CartSlice Slice
  const dispatch = useDispatch();
  // const storeData = useSelector((state) => state.CartSlice);
  // we bring state of cart using useSelector now it's intialState because 
  // we haven't done something you console it to check
  const storeData = useSelector((state) => state.CartSlice);
  // How it's Written: state paramteer is by default state.SliceFileName
  console.log(storeData , "{I'm data from Store.jsx}");  
  return (
   <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        // in flatList every data is sum up as an item 
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              // Here we are saying
              // 1. Go to detail page
              // 2. passing a object named as item{it contains detail of Flatlist data} 
              // params as main
              // 3. for testing pupose I also send my Name there 
            
              navigation.navigate("Details", {
                main: item,
                name: "Tausif"
              });
            }}

            activeOpacity={0.7}
            style={{
              height: responsiveHeight(28),
              borderWidth: 2,
              borderColor: "#E3E3E3",
              width: responsiveWidth(45),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{
                height: 125,
                width: 125,
                alignSelf: "center",
                resizeMode: "contain",
              }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingHorizontal: 10, gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ color: "grey" }}>{item.pieces} Priceg</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  ₹ {item.price}
                </Text>
                {storeData.some((value) => value.name == item.name) ? (
                  <FontAwesome
                    name="minus-square"
                    size={33}
                    color= 'red'
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                ) : (
                  <FontAwesome
                    name="plus-square"
                    size={33}
                    color= 'green'
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red',
    flex:1,
 
  },
  product:{
    // backgroundColor:'lightblue',
    height: responsiveHeight(31),
    width: responsiveWidth(40),
    borderRadius: 10,
    // Here gap:100 won't work cause gap use on parent item and work for children item and here only parent item no child item 
    marginRight: 6,
    borderColor:'grey',
    borderWidth:2,
    padding: 15,
   
    
  },
  text:{
    fontSize: responsiveFontSize(2.5),
    fontWeight:'bold'
  },
  image:{
    width: responsiveWidth(33) ,
     height: responsiveHeight(14),
      resizeMode:'contain'
  },
  

})

export default Item