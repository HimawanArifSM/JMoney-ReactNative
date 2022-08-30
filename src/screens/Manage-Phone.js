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
import BtnProfile from '../components/BtnProfile';
import Icon from 'react-native-vector-icons/Feather';

const ManagePhone = ({navigation}) => {
  return (
    <View style={[styles.padMain]}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
      </View>
      <View
        style={[
          stylesLocal.elementLayout2,
          styles.marC,
          styles.padMain,
          stylesLocal.flxRow,
        ]}>
        <View>
          <Text>Primary</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>
            +62 812-2131-2321
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Change Phone')}>
          <Icon name="clipboard" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  marTop: {
    marginVertical: 20,
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
  elementLayout2: {
    backgroundColor: SECONDARY_COLOR,
    width: Dimensions.get('screen').width * (95 / 100),
    height: 85,
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
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

export default ManagePhone;
