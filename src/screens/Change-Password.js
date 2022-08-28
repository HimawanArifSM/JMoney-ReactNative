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

const ChangePassword = () => {
  return (
    <View style={styles.padMain}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input placeholder="Current Password" icon="lock" secure={true} />
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input placeholder="New Password" icon="lock" secure={true} />
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input placeholder="Repeat Password" icon="lock" secure={true} />
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
  padMain: {
    padding: 15,
    flexDirection: 'column',
  },
  marTop: {
    marginVertical: 20,
  },
  elementLayout2: {
    backgroundColor: SECONDARY_COLOR,
    width: Dimensions.get('screen').width * (95 / 100),
    height: 85,
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  textMain: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
  },
  flxRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default ChangePassword;
