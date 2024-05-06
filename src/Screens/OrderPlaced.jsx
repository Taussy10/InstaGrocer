import { FlatList, StyleSheet, Text, View , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Colors } from '../Utility/Colors';
import { verticalScale, moderateScale , scale } from 'react-native-size-matters';
const OrderPlaced = ({route , navigation}) => {
    // const productData = route.params.main;
    // console.log(productData , "coming from Cart");
    
    // StoreData = it has state of cartSlice  basically all the data 
    // e.g. storedata: [{"name": "apple" "quantity": 1}] all the things same but quantity buy default 1 

    // ProductData  = it is navigator who has data and navigating from one place to another so it's dyanimic sometimes 0 data someitmes all data  it increases the number 
       // e.g. storedata: [{"name": "apple" "quantity": NAN}] all the things same but quantity currenlty NAN cause I haven't added if I add 

    const storeData = useSelector((state) => state.CartSlice);

//  console.log(storeData , "Storedata");
//  console.log(productData, "Productdata");
 

  
    // console.log(name);
  return (
    <SafeAreaView style={styles.container}>

    <Image  source={require("../Assets/Images/OrderPlaced.png")} />
    <Text style={{fontSize: moderateScale(30) , color:Colors.PRIMARY ,}}>Thanks for ordering </Text>

    <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home")
        }
        style={{
          backgroundColor: Colors.PRIMARY,
          borderRadius: moderateScale(10),
          height: verticalScale(70),
          width: scale(300)  ,
          justifyContent: "center",
          alignItems: "center",
          // marginTop: verticalScale(300)
        }}>
        <Text style={{ color: "white", fontSize: moderateScale(30) , fontWeight: "700" }}>
          Back to Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OrderPlaced

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    padding: moderateScale(10)  ,
    alignItems:'center',
    padding: moderateScale(20)  ,
    justifyContent:'center',
    // flexDirection: "row",
    justifyContent:'space-around',
    backgroundColor:'black'
  }
})