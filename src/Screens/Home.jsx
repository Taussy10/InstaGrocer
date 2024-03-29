import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SearchBar from '../Component/SearchBar'
import Item from '../Component/Item'
import Header from '../Component/Header'
import ProductsTitle from '../Component/ProductsTitle'
import { Product, Vegetables } from '../Data/Data' 
import { Fruits } from '../Data/Data'



const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container} >
     <ScrollView  showsHorizontalScrollIndicator={false} > 
    {/* Header */}  
    <View style={styles.header}>
    {/* <Header/> */}
    <SearchBar />
    </View>
    {/* Banner */}
    <Image source={require('../Assets/Images/banner.png')} style={styles.image} />
    
    <ProductsTitle title="Exclusive Offers" />

 <Item data={Fruits} navigation={navigation} />
 <ProductsTitle title="Best Selling" />
 <Item  data={Vegetables} navigation={navigation} />
 </ScrollView>
    </SafeAreaView>
  )
}
  
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'blue',
    padding: 20,
  },
  header:{
    height: responsiveHeight(15),
    width: responsiveWidth(90),
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
   
  },
  image:{
    width: responsiveWidth(90) ,
    height: responsiveHeight(15),
    borderRadius: 10,
    marginTop: 40,
  },
  
})