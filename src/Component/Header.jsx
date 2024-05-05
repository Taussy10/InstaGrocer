import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <>
      <Image source={require('../Assets/Images/Logo.png')} style={styles.logo} />
       <Text style={{color:'white' , fontSize:20 , fontWeight:'700'}}>New Delhi, India</Text>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
  logo:{
    marginTop: 30,
  }
})