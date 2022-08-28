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
import Data from '../assets/Data';

const Home = ({navigation}) => {
  return (
    <>
      <View>
        {/* header */}
        <View style={stylesLocal.header}>
          <View>
            <View>
              <Image />
            </View>
            <View>
              <Text style={stylesLocal.textWhite}>Balance</Text>
              <Text style={stylesLocal.textWhite}>Amount</Text>
            </View>
          </View>
          <View>
            <Icon name={'bell'} size={20} color={'white'} />
          </View>
        </View>
        {/* button */}
        <View style={stylesLocal.buttonSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Find Receiver')}
            style={stylesLocal.btnOne}>
            <Icon name="arrow-up" size={20} />
            <Text>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesLocal.btnOne}>
            <Icon name="plus" size={20} />
            <Text>Top Up</Text>
          </TouchableOpacity>
        </View>
        {/* content */}
        <View>
          <View style={stylesLocal.textBetween}>
            <Text>Transaction History</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={Data}
        renderItem={ItemList}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={stylesLocal.padding}
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
    justifyContent: 'space-between',
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
  textBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Home;
