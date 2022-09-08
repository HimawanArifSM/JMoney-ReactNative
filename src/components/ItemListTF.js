import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemListTF = ({item}) => {
  return (
    <View style={stylesLocal.listed}>
      <View style={stylesLocal.leftSide}>
        {/* <Image /> */}
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.marginLeft}>
          <Text>{item.fullname}</Text>
          <Text>{item.phonenumber}</Text>
        </View>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  pict: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  leftSide: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  listed: {
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {
    marginHorizontal: 10,
  },
});

export default ItemListTF;
