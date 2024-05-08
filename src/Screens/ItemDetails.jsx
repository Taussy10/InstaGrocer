import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View , SafeAreaView, ScrollView , StatusBar} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/Entypo'
import Heart from 'react-native-vector-icons/AntDesign'
import Back from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
import DropBox from '../Component/DropBox'


// Redux code 
import { useDispatch , useSelector } from 'react-redux'; 
import { addToCart } from '../Redux/CartSlice'
import { Colors } from '../Utility/Colors'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
// You may remove it try to remove it 


const ItemDetails = ({route, navigation}) => {
  // to use Dropbox you have to enable {item}
// const {item} = route.params.main;
// const [selected, SetSelected] = useState(null)
const [heartColor, setHeartColor] = useState("grey")

// console.log(item , "HIFS");
// Redux codes
const storeData = useSelector((state) => state.CartSlice);
const dispatch = useDispatch()





const productData = route.params.main;
 // for reciveing data  from Home.jsx screen you have to use route.params.parameterName 
// storing in container so we can use it later to get the data and pass the data to somewhere else REMEMBER data is stored in productData
// BTW you can also ge the data by   const { itemId, otherParam } = route.params;
//  by this but we are stroing first in productData so that we can we use in useDispatch method

console.log(storeData , "storeData");
console.log(productData , "productData");



// Here we desturucter the data had on productData otherwise you have to... You don't need to destructure 
const { name, price, pieces, img , details  } = productData;
console.log(name);
console.log(details);
console.log(productData , "{I'm data from Item.jsx}");


// const handleAddToCart = () => {
//   // console.log("Cart") 
//   // again we send the data to Cart screen using params method but we stored Data into productData that's we are sending productData
 
// };


  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>

      <StatusBar backgroundColor="black" />

      {/* Image */}
      <View style={{ height: verticalScale(80) }}>
  <ImageBackground source={ img } style={styles.BackgroundImg} resizeMode="contain">
    {/* Maine bol diya jab onPress kare tabhi aaye bina baat ke naa aaye */}
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ marginTop: verticalScale(25) , marginLeft: scale(15) }}>
      <Back name="chevron-back" size={40} />
    </TouchableOpacity>
  </ImageBackground>
</View>
     
    
        {/* Container 2 */}
        <View style={styles.subContainer}>

        
        <View style={{  height: verticalScale(150),  marginTop: verticalScale(140)}}>
       
        <View style={{justifyContent:'space-between', flexDirection:'row' }}> 
        <Text style={{fontSize: moderateScale(24), fontWeight:'bold'}}>{name} </Text>
        {/* <Text style={{fontSize: responsiveFontSize(4), fontWeight:'bold'}}> </Text> */}
        {
          <TouchableOpacity onPress={()=> { 
          const newColor = heartColor === 'grey' ? 'red' : 'grey';
          setHeartColor(newColor) } 
          }>
           <Heart  name="heart" size={35}  color={heartColor}  /> 
          </TouchableOpacity>
        }  
        </View>

        <Text style={{fontSize: moderateScale(16), marginBottom: (10), marginTop: (5)}}>{pieces}</Text>
       
        {/* Addition and Price Container*/}
        <View style={{  alignItems:'center', flexDirection:'row', justifyContent:'space-between' , }}> 

        <View style={ styles.qtyContainer}> 

         <TouchableOpacity style={styles.roundBtn}>
         <Icon  name="plus" size={25} color={"white"}/>

         </TouchableOpacity>

        <Text  style={styles.qty} > 1KG </Text>

        <TouchableOpacity style={{ ...styles.roundBtn , backgroundColor:'lightgrey'}}>
      <Icon  name="minus" size={25}/>
      </TouchableOpacity>
        </View>
        <Text style={{fontSize: moderateScale(25), fontWeight:'bold'}}>₹{price}</Text>
        </View> 
       
        </View>

      
       {/* Container 3: Prdouct Detail  () */}
        <View style={styles.productDetail}>
          <Text  style={{fontSize: moderateScale(16) , fontWeight:'700', marginBottom: 10 , }}>Proudct Details</Text>
          <Text style={{color:'grey', fontWeight:'600', fontSize: moderateScale(13)}}>
            {details}
          </Text>
        </View>



{/* () */}
<TouchableOpacity
  onPress={() => {
    dispatch(addToCart(productData));
    navigation.navigate("Cart", {main: productData});
  }}
  activeOpacity={0.8}
  style={styles.btn }
>
  <Text style={{ color: "white", fontSize: moderateScale(18), fontWeight: "700" }}>
    Add to Basket
  </Text>
</TouchableOpacity>
</View>
</ScrollView>

    </SafeAreaView>
  )
}

export default ItemDetails

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  subContainer:{
    marginTop: 110,
    padding: 15,
    // backgroundColor: "lightgreen",
    
  },
  BackgroundImg:{
    backgroundColor: "#cdead6",
    
    // padding: 150,
    height: verticalScale(340),
    
  },
  qty:{
   fontSize: moderateScale(20)
    },
roundBtn:{ 
    width: scale(30) ,
    height: verticalScale(30) , 
    borderRadius: moderateScale(15),
    backgroundColor:Colors.PRIMARY , 
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  qtyContainer:{
     flexDirection:'row',
    alignItems:'center' ,
    gap: moderateScale(4),
    height: verticalScale(45) ,
    width: scale(120),
      
      },
      productDetail:{
      marginBottom: verticalScale(60),
      // backgroundColor:'lightblue',
      height: (90),
      width: scale(358),
      paddingRight: scale(25),
      
      },
      btn:{
        backgroundColor: Colors.PRIMARY,
        borderRadius: moderateScale(10),
        height: verticalScale(70),
        justifyContent: "center",
        alignItems: "center",
      }
})