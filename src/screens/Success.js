import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles/global';
import {useSelector} from 'react-redux';

const Success = ({navigation}) => {
  const data = useSelector(state => state.profile.data);
  const name = useSelector(state => state.transactions.name);
  const phone = useSelector(state => state.transactions.phone);
  const amount = useSelector(state => state.transactions.amount);
  const notes = useSelector(state => state.transactions.notes);
  const time = useSelector(state => state.transactions.date);
  const dateOnly = time.slice(0, 10);
  const hours = time.slice(11, 16);
  return (
    <ScrollView>
      <View style={stylesLocal.header}>
        <Text>Transfer Success</Text>
      </View>
      <View style={stylesLocal.padMain}>
        <View style={stylesLocal.logoMid}>
          <Icon name="checkcircle" size={69} color="green" />
          <Text style={styles.marA}>Transfer Success</Text>
        </View>
        <View style={stylesLocal.elements}>
          <View style={stylesLocal.elementLayout}>
            <Text>Amount</Text>
            <Text>Rp {amount}</Text>
          </View>
          <View style={stylesLocal.elementLayout}>
            <Text>Balance Left</Text>
            <Text>Rp {data.balance - amount}</Text>
          </View>
        </View>
        <View style={stylesLocal.elements}>
          <View style={stylesLocal.elementLayout}>
            <Text>Date</Text>
            <Text>{dateOnly}</Text>
          </View>
          <View style={stylesLocal.elementLayout}>
            <Text>Time</Text>
            <Text>{hours}</Text>
          </View>
        </View>
        <View style={stylesLocal.elementLayout2}>
          <Text>Notes</Text>
          <Text>{notes}</Text>
        </View>
        <Text style={stylesLocal.marTop}>From</Text>
        <View style={stylesLocal.headerContent}>
          <View style={stylesLocal.pict} />
          <View style={stylesLocal.marLeft}>
            <Text>{data.fullname}</Text>
            <Text>{data.phonenumber}</Text>
          </View>
        </View>
        <Text style={stylesLocal.marTop}>To</Text>
        <View style={stylesLocal.headerContent}>
          <View style={stylesLocal.pict} />
          <View style={stylesLocal.marLeft}>
            <Text>{name}</Text>
            <Text>{phone}</Text>
          </View>
        </View>
        <View style={stylesLocal.marTop}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={stylesLocal.btnOne}>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
  padMain: {
    padding: 15,
    flexDirection: 'column',
  },
  logoMid: {
    alignItems: 'center',
  },
  marLeft: {
    marginLeft: 15,
  },
  marTop: {
    marginVertical: 20,
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
});

export default Success;
