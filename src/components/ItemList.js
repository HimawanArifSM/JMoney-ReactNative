import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ItemList = ({item}) => {
  return (
    <View style={stylesLocal.listed}>
      <View style={stylesLocal.leftSide}>
        {/* <Image /> */}
        <View style={stylesLocal.pict} />
        <View>
          <Text>{item.name}</Text>
          <Text>{item.transType}</Text>
        </View>
      </View>
      <View>
        <Text>{item.amount}</Text>
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
  },
});

export default ItemList;
