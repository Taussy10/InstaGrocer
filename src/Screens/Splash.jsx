import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native'


import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { moderateScale , verticalScale , scale } from 'react-native-size-matters';
import { useEffect } from 'react';
import { Colors } from '../Utility/Colors';

function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignUp")
    }, 1000);
  }, )
  
  return (
    // Each screen always start from SafeAreaView cause it acquire whole SafeArea of a phone 
    <SafeAreaView  style={styles.container}>
        <View >
          <Text style={{fontSize: moderateScale(100) , color:'white', fontWeight: '700' ,   }}>Nectar</Text>

          <Text style={{fontSize: moderateScale(25) ,color:'lightgrey', fontWeight: '500',textAlign:'center'  }}> Buy Online Groceries</Text>
        </View>
      
    </SafeAreaView>
  );
}


export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'row',
    padding:20,
  },
  image:{
    width: moderateScale(250),
    height: verticalScale(300),
  }
})