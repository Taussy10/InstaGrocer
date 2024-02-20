import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View , SafeAreaView} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/Entypo'
import Heart from 'react-native-vector-icons/AntDesign'
import Back from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
import DropBox from '../Component/DropBox'


// Redux code 
import { useDispatch , useSelector } from 'react-redux'; 
import { addToCart } from '../Redux/CartSlice'
// You may remove it try to remove it 


const Details = ({route, navigation}) => {
  // to use Dropbox you have to enable {item}
const {item} = route.params.main;
// const [selected, SetSelected] = useState(null)
const [heartColor, setHeartColor] = useState("grey")



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

const myName = route.params.name;
console.log(myName);

// Here we desturucter the data had on productData otherwise you have to... You don't need to destructure 
const { name, price, pieces, img } = productData;

console.log(productData , "{I'm data from Item.jsx}");

// const handleAddToCart = () => {
//   // console.log("Cart") 
//   // again we send the data to Cart screen using params method but we stored Data into productData that's we are sending productData
 
// };


  return (
    <SafeAreaView  style={styles.container}>
      {/* Image */}
      <View style={{ height: responsiveHeight(10), padding: 10 }}>
  <ImageBackground source={{ uri: img }} style={styles.image} resizeMode="contain">
    {/* Maine bol diya jab onPress kare tabhi aaye bina baat ke naa aaye */}
    <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ marginTop: 25, marginLeft: 15 }}>
      <Back name="chevron-back" size={40} />
    </TouchableOpacity>
  </ImageBackground>
</View>
     
    
        {/* Container 2 */}
        <View style={styles.productDetail}>
       
        <View style={{justifyContent:'space-between', flexDirection:'row' }}> 
        <Text style={{fontSize: responsiveFontSize(4), fontWeight:'bold'}}>{name} </Text>
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
        <Text>{pieces}</Text>
       
        {/* Addition corrector */}
        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between',}}> 

        <View style={{ flexDirection:'row' , gap: 5,}}> 
        <Icon  name="plus" size={30}/>
        <Text style={styles.qty}> 1 </Text>
      <Icon  name="minus" size={30}/>
      
        </View>
        <Text style={{fontSize: responsiveFontSize(4)}}>${price}</Text>
        </View> 
       
        </View>

        {/*  to use Dropbox you have to enable {item} */}
        <DropBox item={item}  /> 
       {/* Container 3: Prdouct Detail */}




{/* () */}
<TouchableOpacity
  onPress={() => {
    dispatch(addToCart(productData));
    navigation.navigate("Cart", {main: productData});
  }}
  activeOpacity={0.8}
  style={{
    backgroundColor: "green",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
    Add to Basket
  </Text>
</TouchableOpacity>

 {/* {storeData.some((value)=> value.name === productData.name)  ? ( 
 <TouchableOpacity
              disabled={true}
              activeOpacity={0.8}
              style={{
                // Grey color
                backgroundColor: "grey",
                borderRadius: 10,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
                Added to Basket
              </Text>
            </TouchableOpacity>) 
 : 
 (  <TouchableOpacity
  onPress={() => {
    dispatch(addToCart(productData));
    navigation.navigate("Cart");
  }}
  activeOpacity={0.8}
  style={{
    backgroundColor: "green",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
    Add to Basket
  </Text>
</TouchableOpacity>
            ) } */}
       


       {/* {storeData.some((value) => value.name == productData.name) ? (
            <TouchableOpacity
              disabled={true}
              activeOpacity={0.8}
              style={{
                // Grey color
                backgroundColor: "grey",
                borderRadius: 10,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "black", fontSize: 18, fontWeight: "700" }}>
                Added to Basket
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(productData));
                navigation.navigate("Cart");
              }}
              activeOpacity={0.8}
              style={{
                backgroundColor: "green",
                borderRadius: 10,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Add to Basket
              </Text>
            </TouchableOpacity>
          )} */}


        {/* </View> */}
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
    // backgroundColor:'red'
    
  },
  image:{
    height:responsiveHeight(30)  ,
    
  },
  productDetail:{
    padding:10,
    height: responsiveHeight(20),
    // marginTop: ,
    // backgroundColor:'red',
    borderBottomColor:'grey',
    borderBottomWidth: responsiveWidth(0.7),
    // backgroundColor:'green',
    marginTop: 143,
  },

  // button:{
  //   backgroundColor:'green',
  //   height:responsiveHeight(8),
  //   borderRadius: 15,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   marginTop: 10,
   
  // },
  qty:{
    fontSize: responsiveFontSize(2.5),
     borderColor:'black',
     borderWidth:2,
      padding:5,
     borderRadius: 8,},
     desc:{
      fontSize: responsiveFontSize(2.2),
      fontWeight:'600'
     }
})