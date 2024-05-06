import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { scale, moderateScale, verticalScale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
// import { myColors } from "../Utils/MyColors";
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Utility/Colors";
import Icon from "react-native-vector-icons/Entypo";

const Cart = ({ navigation, route }) => {
  const [loading, setloading] = useState(false)

  const productData = route.params.main;
  console.log(productData, "In cart.jsx");
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  //  console.log(storeData);
  let amount = 0;
  storeData.forEach((element) => {
    amount += element.price;
  });

  const load = ()  =>{
    setTimeout(() => {
      
         navigation.navigate("OrderPlaced", { main: productData })
    }, 3000);

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={storeData}
          renderItem={({ item, index }) => (
            // Cart Container
            <View
              style={{
                height: verticalScale(130),
                borderBottomColor: "#E3E3E3",
                borderBottomWidth: 3,
                flexDirection: "row",
                // backgroundColor: "blue",
              }}
            >
              {/* For image */}
              <View
                style={{
                  flex: 0.35,
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "lightblue",
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
// backgroundColor:'orange'
}}
>
<View style={{ flexDirection: "row",alignContent: "center",justifyContent: "space-between",alignItems: "center",

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
                    <TouchableOpacity
                      style={{
                        ...styles.roundBtn,
                        backgroundColor: "lightgrey",
                      }}
                      onPress={() => {
                        dispatch(decrementQty(item));
                      }}
                    >
                      <Icon name="minus" size={30} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.roundBtn}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQty(item));
                        }
                      }}
                    >
                      <Icon name="plus" size={30} color={"white"} />
                    </TouchableOpacity>
                    {/* <AntDesign
                      name="pluscircleo"
                      size={28}
                      onPress={() => {
                        if (item.quantity == 7) {
                        } else {
                          dispatch(incrementQty(item));
                        }
                      }}
                    /> */}
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
      <TouchableOpacity
        onPress={() => 
            {setloading(true); load() }}
      
        style={{
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
  
  {loading ? (
    // Display the activity indicator while loading is true
    <ActivityIndicator  size={'large'} color={'white'}/>
  ) : (
    // Display the "Order it" text when not loading
    <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
      Order it
    </Text>
  )}
         {/* <Text style={{ color: "white", fontSize: 30, fontWeight: "700" }}>
          Order it{" "}
        </Text> */}
           

       
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 15,
  },
  roundBtn: {
    width: scale(30),
    height: verticalScale(30),
    borderRadius: moderateScale(25),
    backgroundColor: Colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
