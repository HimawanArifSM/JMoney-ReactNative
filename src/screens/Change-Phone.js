import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';
import Input from '../components/Input';

const ChangePhone = () => {
  return (
    <View style={[styles.padMain, stylesLocal.spBtwn]}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
      </View>
      <View style={[styles.inputWrapper]}>
        <Input
          placeholder="Enter your phone number"
          icon="phone"
          type="numeric"
        />
      </View>
      <View style={stylesLocal.marTop}>
        <TouchableOpacity style={stylesLocal.btnOne}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  marTop: {
    marginVertical: 20,
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
  spBtwn: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: Dimensions.get('screen').height * (8 / 10),
  },
});

export default ChangePhone;
