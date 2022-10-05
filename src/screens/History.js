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

// import Data from '../assets/Data';
import {useDispatch, useSelector} from 'react-redux';
import {getHistoryTransaction} from '../redux/actions/transaction';
import {resetdata} from '../redux/reducers/transactions';

const Details = ({navigation}) => {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState('DESC');
  // const data = useSelector(state => state.transactions.data);
  const nextData = useSelector(state => state.transactions.nextData);
  const token = useSelector(state => state.auth.token);
  const pagination = useSelector(state => state.transactions?.pageInfo);
  let page = pagination?.currentpage;
  let next = pagination?.nextPage;
  console.log(nextData);

  const nextPage = () => {
    if (next === null) {
      console.log('page empty');
    } else {
      page++;
      // console.log(page);
      console.log(page + 1);
      dispatch(getHistoryTransaction({token, page, sort}));
    }
    console.log('next');
  };
  const onRefresh = () => {
    dispatch(getHistoryTransaction({token, sort}));
    dispatch(resetdata());
  };
  React.useEffect(() => {
    dispatch(getHistoryTransaction({token, sort}));
  }, [dispatch, token, sort]);
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
            <TouchableOpacity
              onPress={() => {
                setSort('ASC');
                dispatch(resetdata());
              }}
              style={stylesLocal.btnTwo}>
              <Icon name="arrow-up" size={20} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSort('DESC');
                dispatch(resetdata());
              }}
              style={stylesLocal.btnTwo}>
              <Icon name="arrow-down" size={20} color="green" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={stylesLocal.btnOne}>
            <Text>Filter by Date</Text>
          </TouchableOpacity>
        </View>
      </>
      <View style={{height: Dimensions.get('screen').height - 317}}>
        <FlatList
          onRefresh={onRefresh}
          refreshing={false}
          onEndReached={nextPage}
          onEndReachedThreshold={0.5}
          data={nextData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Transfer Success')}>
                <ItemList item={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          // contentContainerStyle={stylesLocal.padding}
          // ListHeaderComponent={}
        />
      </View>
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
