import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(`${item.navigate}`)}
      style={stylesLocal.listed}>
      <View style={stylesLocal.leftSide}>
        {/* <Image /> */}
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.marginLeft}>
          <Text>{item.name}</Text>
          <Text>{item.transType}</Text>
        </View>
      </View>
      <View>
        <Text>{item.amount}</Text>
      </View>
    </TouchableOpacity>
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

export default ItemList;
