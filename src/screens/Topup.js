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
import Icon from 'react-native-vector-icons/Feather';
import topup from '../assets/topup';
import ItemList2 from '../components/ItemList2';

const Topup = ({navigation}) => {
  return (
    <View style={stylesLocal.padBot}>
      {/* <View style={stylesLocal.header}>
        <View style={stylesLocal.headerContent}>
          <Icon name="plus-square" size={30} color={PRIMARY_COLOR} />
          <View style={stylesLocal.marLeft}>
            <Text>Virtual Account</Text>
            <Text>Virtual Account Number</Text>
          </View>
        </View>
      </View> */}
      <View style={stylesLocal.padMain}>
        <Text>How To Top-Up</Text>
      </View>
      <FlatList
        data={topup}
        renderItem={ItemList2}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={stylesLocal.padding}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  padMain: {
    padding: 15,
    flexDirection: 'column',
  },
  padBot: {
    paddingBottom: 40,
  },
  marLeft: {
    marginLeft: 15,
  },
  marTop: {
    marginVertical: 50,
  },
  pict: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (15 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },
  headerContent: {
    backgroundColor: SECONDARY_COLOR,
    flexDirection: 'row',
    width: Dimensions.get('screen').width * (90 / 100),
    height: Dimensions.get('screen').height * (10 / 100),
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  elements: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  btnOne: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    height: 69,
    flexDirection: 'row',
    borderRadius: 20,
    elevation: 3,
  },
  elementLayout: {
    backgroundColor: SECONDARY_COLOR,
    width: Dimensions.get('screen').width * (40 / 100),
    height: 69,
    padding: 10,
    borderRadius: 20,
  },
  elementLayout2: {
    backgroundColor: SECONDARY_COLOR,
    width: Dimensions.get('screen').width * (95 / 100),
    height: 69,
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  padding: {
    padding: 10,
  },
});

export default Topup;
