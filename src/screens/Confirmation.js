import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';

const Confirmation = ({navigation}) => {
  return (
    <View>
      <View style={stylesLocal.header}>
        <View style={stylesLocal.headerContent}>
          <View style={stylesLocal.pict} />
          <View style={stylesLocal.marLeft}>
            <Text>Samuel Sushi</Text>
            <Text>Phone number</Text>
          </View>
        </View>
      </View>
      <View style={stylesLocal.padMain}>
        <View style={stylesLocal.elements}>
          <View style={stylesLocal.elementLayout}>
            <Text>Amount</Text>
            <Text>Rp Amount</Text>
          </View>
          <View style={stylesLocal.elementLayout}>
            <Text>Balance Left</Text>
            <Text>Rp Amount</Text>
          </View>
        </View>
        <View style={stylesLocal.elements}>
          <View style={stylesLocal.elementLayout}>
            <Text>Date</Text>
            <Text>Date Now</Text>
          </View>
          <View style={stylesLocal.elementLayout}>
            <Text>Time</Text>
            <Text>Time Now</Text>
          </View>
        </View>
        <View style={stylesLocal.elementLayout2}>
          <Text>Notes</Text>
          <Text>Notes from reducer</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PIN Confirmation')}
            style={stylesLocal.btnOne}>
            <Text>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  padMain: {
    padding: 15,
    flexDirection: 'column',
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
});

export default Confirmation;
