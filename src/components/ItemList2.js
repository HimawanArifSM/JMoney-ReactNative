import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';

const ItemList2 = ({item}) => {
  return (
    <View style={stylesLocal.leftSide}>
      <Text>{item.id}</Text>
      <Text style={stylesLocal.marLeft}>{item.value}</Text>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  leftSide: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    marginBottom: 30,
    alignContent: 'center',
    borderRadius: 20,
  },
  marLeft: {
    marginLeft: 15,
  },
});

export default ItemList2;
