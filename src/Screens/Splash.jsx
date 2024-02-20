import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native'


import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useEffect } from 'react';

function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SignUp")
    }, 1000);
  }, )
  
  return (
    // Each screen always start from SafeAreaView cause it acquire whole SafeArea of a phone 
    <SafeAreaView  style={styles.container}>
      <Image source={require('../Assets/Images/Logo.png')} style={styles.image} />
        <View >
          <Text style={{fontSize: responsiveFontSize(10)  }}>nectar</Text>

          <Text style={{fontSize: responsiveFontSize(3)  }}>Online Groceries</Text>
        </View>
        <Text>
      </Text>
    </SafeAreaView>
  );
}


export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightgreen',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection:'row',
    padding:20,
  },
  image:{
    width: responsiveWidth(30),
    height: responsiveHeight(18),
  }
})