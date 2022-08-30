import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import ItemList from '../components/ItemList';

import graph from '../assets/graphic.png';
import Data from '../assets/Data';

const Details = ({navigation}) => {
  return (
    <>
      {/* header */}
      {/* <ScrollView> */}

      {/* </ScrollView> */}
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={stylesLocal.header}>
              {/* <View style={stylesLocal.buttonSection}> */}
              <View style={stylesLocal.textBetween}>
                <Icon name="arrow-down" color="green" size={20} />
                <View>
                  <Text>Income</Text>
                  <Text>Amount</Text>
                </View>
              </View>
              <View style={stylesLocal.textBetween}>
                <Icon name="arrow-up" color="red" size={20} />
                <View>
                  <Text>Expense</Text>
                  <Text>Amount</Text>
                </View>
              </View>
              {/* </View> */}
            </View>
            {/* button */}
            <View style={stylesLocal.padding}>
              <Text>In This Week</Text>
              <Image style={stylesLocal.graphSection} source={graph} />
            </View>
            {/* content */}
            <View>
              <View style={stylesLocal.textBetween}>
                <Text>Transaction History</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('History')}>
                  <Text>See all</Text>
                </TouchableOpacity>
              </View>
              <View />
            </View>
          </View>
        }
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
    </>
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
    height: Dimensions.get('screen').height * (15 / 100),
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
  textBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Details;
