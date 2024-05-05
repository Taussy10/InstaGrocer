// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
// import React from "react";
// import {  useDispatch, useSelector } from "react-redux";
// // ( )  

// import CartItem from "../Component/CartItem";

// import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
// const Cart = ({ route }) => {
//   // const { item } = route.params;
// const productData =   route.params.main;
//   // to get the data 
//   // const selector = useSelector((state) => state.CartSlice) 

 
  

//   // console.log(selector);
//  const dispatch = useDispatch()  

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={{ fontSize: responsiveFontSize(5) }}>My Cart</Text>
//       {/* {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))} */}

//       {/* For the cartBox */}
      
//      {/* <CartItem key={item.id} item={item}  /> */}
//      <CartItem route={route} productData={productData}  />

     
//     </SafeAreaView>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor:'lightgreen',
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
 
// });

import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
// import { myColors } from "../Utils/MyColors";
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Utility/Colors";

const Cart = ({navigation, route}) => {
  const productData = route.params.main
  console.log(productData , "In cart.jsx");
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
//  console.log(storeData);
  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price;
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 15,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "500" }}>
        My Cart
      </Text>

      <View
        style={{
          flex: 0.93,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{}}
          data={storeData}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: responsiveHeight(18),

                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
            >
              {/* ///Child 1 */}

              <View
                style={{
                  flex: 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ height: 120, width: 120, resizeMode: "contain" }}
                  source={item.img} 
                  />
              </View>

              {/* ///Child 2 */}
              <View
                style={{
                  flex: 0.7,
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.name}
                  </Text>
                  <AntDesign
                    name="close"
                    size={25}
                    color="grey"
                    onPress={() => {
                      dispatch(removeFromCart(item));
                    }}
                  />
                </View>
                <Text style={{ fontSize: 17, color: "grey", marginTop: 5 }}>
                  {item.pieces}, Price
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",

                    marginTop: 10,
                  }}
                >
                  {/* ///Quantity Container// */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <AntDesign
                      name="minuscircleo"
                      size={28}
                      // color={myColors.primary}
                      onPress={() => {
                        dispatch(decrementQty(item));
                      }}
                    />
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <AntDesign
                      name="pluscircleo"
                      size={28}
                      // color={myColors.primary}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQty(item));
                        }
                      }}
                    />
                  </View>

                  {/* ///Quantity Container// */}

                  <Text style={{ fontSize: 22, fontWeight: "600" }}>
                    ₹ {item.quantity * item.price}
                  </Text>
                </View>
              </View>

              {/* ///Child 2 */}
            </View>
          )}
        />
      </View>
      <TouchableOpacity onPress={(()=> navigation.navigate("OrderPlaced", {main:productData}) )}
      style={{
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Text style={{color: "white" , fontSize: 30 , fontWeight: '700'}} >Order it  </Text>
      </TouchableOpacity>
      {/* <View>
        <TouchableOpacity
          onPress={() => {
            nav.navigate("OrderPlaced");
          }}
          activeOpacity={0.8}
          style={{
            // backgroundColor: myColors.primary,
            borderRadius: 10,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
              Go to CheckOut
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
              ₹ {amount}
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default Cart;
