

import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/Entypo'
import { SafeAreaView } from 'react-native-safe-area-context'

// Redux code
import { useDispatch, useSelector } from 'react-redux'


const  CartItem = ({item, route}) => {
  const productData =   route.params.main;
  const Myname =   route.params.hello;
  console.log(Myname);
  // By this we are getting the data from Details.jsx 
  console.log(productData, "{I'm data from Details.jsx}");
const {img, price, pieces, name} = productData

// Redux code 
const storeData = useSelector((state) => state.CartSlice);
const dispatch = useDispatch();

let amount = 0;

storeData.forEach((element)=> {
  amount += element.price;

});



  return (
// Container
    <SafeAreaView style={styles.container}  >


      {/* For the cart */}
    <View style={styles.cart}  >

      {/* for image */}

      <View style={styles.imageContainer}> 
      {/* <Text>Image</Text> */}
    <Image source={{uri: img}} style={styles.image} />
    </View>


      {/* For the detail */}
      <View style={styles.detailContainer}>
       {/* For the name and cross sign */}
       <View>
      <Text>{name}</Text>
       </View>
        

        {/* for pieces */}
         <View style={{flexDirection:'row', justifyContent:'space-between' }}> 
         <Text>{pieces}</Text>
         < Icon  name="cross" size={40}
         onPress={() => {console.log("Cross Sign") 
         dispatch(removeFromCart)  
  }
        }
         />
         </View>


         {/* for addition and subtraction */}

         <View style={{flexDirection: 'row', gap:50, marginTop:20, }}>
       <View style={{flexDirection:'row', gap:10, }} >
    < Icon  name="plus" size={30}/>
         <Text style={styles.qty}>1</Text>
      <Icon  name="minus" size={30}/>
     </View>
 
     <Text style={{fontSize: responsiveFontSize(2.5)}}>${price}</Text>
      </View>

      </View>

      </View>
      </SafeAreaView>
  )
}

export default CartItem

const styles = StyleSheet.create({

  container:{
    flex:1,
    // backgroundColor:'lightblue',
    paddingHorizontal: 15,

  },
  cart:{
    height: responsiveHeight(20),
    width: responsiveWidth(92),
     borderBottomWidth: 3,  
     borderColor: 'grey',
     flexDirection:'row'
  },
  imageContainer:{
    // backgroundColor: 'red',
    width: responsiveWidth(30),

  },
  image:{
        marginTop:5,
        height:responsiveHeight(18) ,
        width: responsiveWidth(30) ,
        borderRadius: 15,
        resizeMode: 'stretch',
      },

      detailContainer:{
        backgroundColor: 'orange',
        width: responsiveWidth(63),
        padding:7,
      }

})