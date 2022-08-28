import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import ItemList from '../components/ItemList';

import Data from '../assets/Data';
import Input from '../components/Input';

const SearchReceiver = ({navigation}) => {
  return (
    <View style={stylesLocal.wraper}>
      {/* header */}
      <View style={stylesLocal.header}>
        <Input placeholder="Search receiver here" icon="search" type="text" />
      </View>
      <View style={stylesLocal.padding}>
        <Text>Contacts</Text>
        <Text>Contacts.Counts</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={ItemList}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={stylesLocal.padding}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  wraper: {
    paddingBottom: 150,
  },
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (10 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    elevation: 3,
  },
  textWhite: {
    color: 'white',
  },
  padding: {
    padding: 10,
  },
  graphSection: {
    padding: 10,
    alignSelf: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  btnOne: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * (40 / 100),
    height: 69,
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 3,
  },
  btnTwo: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * (20 / 100),
    height: 69,
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 3,
  },
});

export default SearchReceiver;
