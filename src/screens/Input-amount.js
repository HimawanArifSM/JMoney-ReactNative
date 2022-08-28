import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import Input from '../components/Input';

const InputAmount = ({navigation}) => {
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
        <View style={stylesLocal.inputFormat}>
          <Input style={stylesLocal.marTop} placeholder="0.00" type="numeric" />
          <Text style={stylesLocal.marTop}>Amount available</Text>
          <Input placeholder="Add some notes" icon="pencil" type="text" />
        </View>
        <View>
          <TouchableOpacity style={stylesLocal.btnOne}>
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
    justifyContent: 'space-between',
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
  inputFormat: {
    alignItems: 'center',
    paddingVertical: 50,
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
});

export default InputAmount;
