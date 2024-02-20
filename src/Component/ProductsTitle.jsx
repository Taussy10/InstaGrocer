import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight , responsiveWidth } from 'react-native-responsive-dimensions'

// You may remove it try to remove it 
import CartSlice from '../Redux/CartSliceCopys'



const ProductsTitle = ({title}) => {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: responsiveFontSize(3.5), fontWeight:'600'}}>{title}</Text>
      <Text style={{color:'green', fontSize: responsiveFontSize(2)}}>See All</Text>
    </View>
  )
}

export default ProductsTitle

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    height: responsiveHeight(5) ,
    width: responsiveWidth(90) ,
    marginTop: 20,
  }
})