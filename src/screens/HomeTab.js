import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';

import Home from './Home';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import SearchReceiver from './SearchReceiver';
import Topup from './Topup';
import Profile from './Profile';
import Input from '../components/Input.js';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {topUp} from '../redux/actions/transaction';
import {resetmsg} from '../redux/reducers/transactions';
import {getUserLogin} from '../redux/actions/profile';

const BottomTab = createBottomTabNavigator();

const HomeTab = ({errors, handleChange, handleSubmit}) => {
  const data = useSelector(state => state.profile.data);
  const [show, setShow] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const token = useSelector(state => state.auth.token);
  const successmsg = useSelector(state => state.transactions.successmsg);
  const dispatch = useDispatch();
  const submit = () => {
    const request = {amount};
    dispatch(topUp({token, request}));
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
    if (successmsg) {
      dispatch(resetmsg());
      setShow(false);
    }
  }, [dispatch, token, successmsg]);
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          header: ({navigation}) => (
            <View style={stylesLocal.home}>
              <View style={stylesLocal.headerLeft}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Image
                    source={{uri: data?.picture}}
                    style={stylesLocal.imaging}
                  />
                  {/* <View style={stylesLocal.pict} /> */}
                </TouchableOpacity>
                <View style={stylesLocal.marLeft}>
                  <Text style={stylesLocal.textWhite}>Balance</Text>
                  <Text style={stylesLocal.textWhite}>{data?.balance}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Icon name={'bell'} size={20} color={'white'} />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="arrow-up" color={color} size={size} />
          ),
          header: () => (
            <View style={stylesLocal.transfer}>
              <Text style={styles.headText}>Find Receiver</Text>
              {/* <Input
                style={styles.marB}
                placeholder="Search receiver here"
                icon="search"
                type="email-address"
                name="search"
                onChange={handleChange}
              /> */}
            </View>
          ),
        }}
        name="Transfer"
        component={SearchReceiver}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="plus" color={color} size={size} />
          ),
          header: () => (
            <View style={stylesLocal.topUp2}>
              <Text style={styles.headText}>Top Up</Text>
              <View style={stylesLocal.topUpContent}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Icon name="plus" size={25} color={PRIMARY_COLOR} />
                </TouchableOpacity>
                <View style={stylesLocal.marLeft}>
                  <Text>Virtual Account</Text>
                  <Text>Virtual Account Number</Text>
                </View>
              </View>
              <Modal
                animationType="fade"
                transparent={true}
                visible={show}
                onRequestClose={() => setShow(!show)}
                style={stylesLocal.br}>
                <View style={stylesLocal.modal}>
                  <View style={stylesLocal.wrapModal}>
                    <Text style={stylesLocal.titleModal}>
                      Input Amount Here
                    </Text>
                    <TextInput
                      style={stylesLocal.input}
                      keyboardType="decimal-pad"
                      placeholder="Min 20000"
                      value={amount}
                      onChangeText={setAmount}
                    />
                    <View style={stylesLocal.wrapButton}>
                      <TouchableOpacity
                        style={stylesLocal.cancel}
                        onPress={() => setShow(!show)}>
                        <Text style={stylesLocal.acount}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={stylesLocal.topUp}
                        onPress={() => submit()}>
                        <Text style={stylesLocal.acount}>Top Up</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          ),
        }}
        name="TopUp"
        component={Topup}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

const stylesLocal = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
  },
  marLeft: {
    marginLeft: 15,
  },
  pict: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  imaging: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  home: {
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
  topUp2: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (20 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    padding: 15,
  },
  topUpContent: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: Dimensions.get('screen').width * (90 / 100),
    height: Dimensions.get('screen').height * (7 / 100),
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  transfer: {
    backgroundColor: PRIMARY_COLOR,
    height: 120,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'column',
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    // borderRadius: 15,
  },
  br: {
    borderRadius: 15,
  },
  wrapModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2,
    margin: 50,
    elevation: 4,
    borderRadius: 15,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 30,
    color: TEXT_DARK,
  },
  input: {
    height: 40,
    borderBottomColor: SECONDARY_COLOR,
    borderBottomWidth: 1,
    fontSize: 18,
    color: TEXT_DARK,
  },
  wrapButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cancel: {
    height: 30,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    elevation: 6,
  },
  acount: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    color: TEXT_DARK,
  },
  topUp: {
    height: 30,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    elevation: 6,
  },
});

export default HomeTab;
