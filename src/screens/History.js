import {
  View,
  Text,
  StyleSheet,
  // Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import ItemList from '../components/ItemList';

import Data from '../assets/Data';

const Details = ({navigation}) => {
  return (
    <View>
      {/* header */}
      <>
        <View style={stylesLocal.header} />
        <View style={stylesLocal.padding}>
          <Text>Transaction History</Text>
        </View>
        <View style={stylesLocal.buttonSection}>
          <View>
            <TouchableOpacity style={stylesLocal.btnTwo}>
              <Icon name="arrow-up" size={20} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLocal.btnTwo}>
              <Icon name="arrow-down" size={20} color="green" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={stylesLocal.btnOne}>
            <Text>Filter by Date</Text>
          </TouchableOpacity>
        </View>
      </>
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Transfer Success')}>
              <ItemList item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => String(item.id)}
        // contentContainerStyle={stylesLocal.padding}
        // ListHeaderComponent={}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  wraper: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (5 / 100),
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

export default Details;
