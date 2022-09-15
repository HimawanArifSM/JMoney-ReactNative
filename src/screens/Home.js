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
import {SECONDARY_COLOR} from '../styles/constant';
import ItemList from '../components/ItemList';
// import Data from '../assets/Data';
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../redux/actions/transaction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.transactions.data);
  const token = useSelector(state => state.auth.token);
  React.useEffect(() => {
    dispatch(getHistoryTransaction(token));
  }, [dispatch, token]);
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <View>
            {/* header */}
            {/* button */}
            <View style={stylesLocal.buttonSection}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Transfer')}
                style={stylesLocal.btnOne}>
                <Icon name="arrow-up" size={20} />
                <Text>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('TopUp')}
                style={stylesLocal.btnOne}>
                <Icon name="plus" size={20} />
                <Text>Top Up</Text>
              </TouchableOpacity>
            </View>
            {/* content */}
            <View>
              <View style={stylesLocal.textBetween}>
                <Text>Transaction History</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details')}>
                  <Text>See all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Transfer Success')}>
              <ItemList item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={stylesLocal.padding}
        // navigasi="TransferInput"
      />
    </>
  );
};

const stylesLocal = StyleSheet.create({
  wraper: {
    flex: 1,
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
