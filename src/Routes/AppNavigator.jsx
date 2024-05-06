import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {createNativeStackNavigator}  from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import ItemDetails from '../Screens/ItemDetails'
import Cart from '../Screens/Cart'
import OrderPlaced from '../Screens/OrderPlaced'
import SearchDetails from '../Screens/SearchDetails'
const Stack = createNativeStackNavigator()

const AppNavigator = ({name}) => {
  return (
  //  Never use View{any react native component} over the Navigator
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}} >
         <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name='SignUp' component={SignUp} />
   <Stack.Screen name='Home' component={Home} />
   <Stack.Screen name='SearchDetails' component={SearchDetails} />
    <Stack.Screen name='ItemDetails' component={ItemDetails} options={{headerShown:true, title:"Item Details"}} />
      <Stack.Screen name='Cart' component={Cart}
       options={{headerShown:true, title:"Cart"}}
      />
      <Stack.Screen name='OrderPlaced' component={OrderPlaced} />

      
    </Stack.Navigator>

   
   
  )
}

export default AppNavigator

const styles = StyleSheet.create({})