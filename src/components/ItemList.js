import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ItemList = ({item}) => {
  const userid = useSelector(state => state.profile.data?.iduser);
  return (
    <View style={stylesLocal.listed}>
      <View style={stylesLocal.leftSide}>
        {/* <Image /> */}
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.marginLeft}>
          {/* {item.type !== 'TopUp' && <Text>{item.sender}</Text>}
          <Text>{item.recipient}</Text> */}
          {item.recipient_id === userid ? (
            item.type === 'TopUp' ? (
              <Text>{item.recipient}</Text>
            ) : (
              <Text>{item.sender}</Text>
            )
          ) : (
            <Text>{item.recipient}</Text>
          )}
          <Text>{item.type}</Text>
        </View>
      </View>
      <View>
        {/* <Text>{item.amount}</Text> */}
        {item.recipient_id === userid ? (
          <Text>+{item.amount}</Text>
        ) : (
          <Text>-{item.amount}</Text>
        )}
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

export default ItemList;
