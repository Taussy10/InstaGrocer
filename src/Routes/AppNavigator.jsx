import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {createNativeStackNavigator}  from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import Details from '../Screens/Details'
import Cart from '../Screens/Cart'
import OrderPlaced from '../Screens/OrderPlaced'
import SearchDetails from '../Screens/SearchDetails'
const Stack = createNativeStackNavigator()

const AppNavigator = ({name}) => {
  return (
  //  Never use View{any react native component} over the Navigator
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
         <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name='SignUp' component={SignUp} />
   <Stack.Screen name='Home' component={Home} />
   <Stack.Screen name='SearchDetails' component={SearchDetails} />
    <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='OrderPlaced' component={OrderPlaced} />

      
    </Stack.Navigator>

   
   
  )
}

export default AppNavigator

const styles = StyleSheet.create({})