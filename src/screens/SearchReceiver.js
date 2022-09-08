import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import {useDispatch, useSelector} from 'react-redux';
import ItemListTF from '../components/ItemListTF';
import Data from '../assets/Data';

import {
  getAllProfile,
  getimage,
  getname,
  getphone,
  getreceiver,
} from '../redux/reducers/transactions';

const SearchReceiver = ({navigation}) => {
  const allprofile = useSelector(state => state.transactions.results);
  const dispatch = useDispatch();
  console.log(allprofile);
  const PassData = item => {
    dispatch(getname(item.fullname));
    dispatch(getimage(item.picture));
    dispatch(getphone(item.phonenumber));
    dispatch(getreceiver(item.iduser));
    navigation.navigate('Input Transfer');
  };
  React.useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View style={stylesLocal.padding}>
            <Text>Contacts</Text>
            <Text>Contacts.Counts</Text>
          </View>
        }
        data={allprofile}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => PassData(item)}>
              <ItemListTF item={item} />
            </TouchableOpacity>
          );
        }}
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
