import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import Home from './Home';
import {PRIMARY_COLOR} from '../styles/constant';
import SearchReceiver from './SearchReceiver';
import Topup from './Topup';
import Profile from './Profile';
import Input from '../components/Input.js';
import styles from '../styles/global';

const BottomTab = createBottomTabNavigator();

const HomeTab = () => {
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
                  <Image />
                  <View style={stylesLocal.pict} />
                </TouchableOpacity>
                <View style={stylesLocal.marLeft}>
                  <Text style={stylesLocal.textWhite}>Balance</Text>
                  <Text style={stylesLocal.textWhite}>Amount</Text>
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
                type="text"
                name="search"
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
            <View style={stylesLocal.topUp}>
              <Text style={styles.headText}>Top Up</Text>
              <View style={stylesLocal.topUpContent}>
                <Icon name="plus" size={30} color={PRIMARY_COLOR} />
                <View style={stylesLocal.marLeft}>
                  <Text>Virtual Account</Text>
                  <Text>Virtual Account Number</Text>
                </View>
              </View>
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
  topUp: {
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
});

export default HomeTab;
