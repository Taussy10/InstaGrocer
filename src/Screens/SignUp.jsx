import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import React, { version } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Google from "react-native-vector-icons/AntDesign"
import { Colors } from '../Utility/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.imageContainer}>
     <Image source={require('../Assets/Images/Logo.png')} style={styles.image} />
     </View>
     
      <TouchableOpacity style={styles.button}
      onPress={()=> navigation.navigate('Home')}
      >
        <Google name='google' size={25} color={'white'}  />
      <Text style={{fontSize: responsiveFontSize(3), fontWeight:'bold' , color:'white' 
  }} >SignUp</Text>
      </TouchableOpacity>
   
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
  flex:1,
   alignItems:'center',
   justifyContent:'center',
  backgroundColor: Colors.PRIMARY
  },
  button:{
    height: verticalScale(50) ,
    width: scale(320),
    borderRadius: moderateScale(50) ,
    backgroundColor:'#0096FF',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:10,
   
    

  },

  imageContainer:{
    height: responsiveHeight(50),
    width: responsiveWidth(10) , 
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  },
  image:{
    height: verticalScale(300),
    width: scale(250) , 
    // backgroundColor:'white'
    resizeMode:'cover',
    // textAlign:'center'
    marginLeft: 50
  }
})