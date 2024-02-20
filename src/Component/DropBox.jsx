import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import { Dropdown } from '../Data/Data';

const DropBox = ({ item }) => {
  const [select, setSelect] = useState(null);

  const handleToggle = (selectedItem) => {
    setSelect(select === selectedItem ? null : selectedItem);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View style={{backgroundColor:'lightblue'}}>
            <TouchableOpacity
style={{
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
}}
onPress={() => {
  handleToggle(item);
  // console.log(item.title);
}}
>
<Icon name="down" size={20} />
</TouchableOpacity>
<Text style={{ fontWeight: '700', fontSize: responsiveFontSize(3) }}>{item.title}</Text>
{select === item && 
( <> 

<Text>{item.content}</Text>
</>)
}

          </View>
        )}
      />
    </View>
  );
};

export default DropBox;

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red'
  }
});

