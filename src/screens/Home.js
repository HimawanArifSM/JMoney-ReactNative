import {
  View,
  Text,
  // ScrollView,
  StyleSheet,
  // Image,
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
import {resetdata} from '../redux/reducers/transactions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.transactions.laman1);
  const token = useSelector(state => state.auth.token);
  const [sort, setSort] = React.useState('DESC');
  const pagination = useSelector(state => state.transactions?.pageInfo);
  let page = pagination?.currentpage;
  let next = pagination?.nextPage;
  const nextPage = () => {
    if (next === null) {
      console.log('page empty');
    } else {
      // page++;
      console.log(page);
      dispatch(getHistoryTransaction({token, page, sort}));
    }
  };
  const onRefresh = () => {
    dispatch(getHistoryTransaction({token, sort}));
  };
  React.useEffect(() => {
    dispatch(getHistoryTransaction({token, sort}));
    dispatch(resetdata());
  }, [dispatch, token, sort]);
  return (
    <>
      <FlatList
        onRefresh={() => onRefresh()}
        refreshing={false}
        onEndReached={() => nextPage()}
        onEndReachedThreshold={0.5}
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
