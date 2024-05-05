import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SearchBar from '../Component/SearchBar'
import Item from '../Component/Item'
import Header from '../Component/Header'
import ProductsTitle from '../Component/ProductsTitle'
import { Product, Vegetables } from '../Data/Data' 
import { Fruits } from '../Data/Data'
import { Colors } from '../Utility/Colors'
import { scale , moderateScale , verticalScale } from 'react-native-size-matters'


const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container} >
     <ScrollView  showsHorizontalScrollIndicator={false} > 
    {/* Header */}  
    <View style={styles.header}>
    <Header/>
    <SearchBar />
    </View>
    {/* padding: 20, */}
<View style={{   paddingLeft: 10, paddingBottom: 20}}>

    {/* Banner */}
    <Image source={require('../Assets/Images/banner.png')} style={styles.image} />
    
    <ProductsTitle title="Exclusive Offers" />

 <Item data={Fruits} navigation={navigation} />
 <ProductsTitle title="Best Selling" />
 <Item  data={Vegetables} navigation={navigation} />
 </View>

 </ScrollView>
    </SafeAreaView>
  )
}
  
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.WHITE

  },
  header:{
    padding:  moderateScale(20),
    alignItems:'center',
    backgroundColor: Colors.PRIMARY ,   
  },
  image:{
    width: responsiveWidth(90) ,
    height: responsiveHeight(15),
    borderRadius: 10,
    marginTop: 40,
  },
  
})