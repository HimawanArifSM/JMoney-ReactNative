import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';
import Input from '../components/Input';
import BtnProfile from '../components/BtnProfile';
import Icon from 'react-native-vector-icons/Feather';

const Notification = () => {
  return (
    <ScrollView style={[styles.padMain, styles.padBtm]}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
      </View>
      <Text style={styles.marB}>Today</Text>
      <View
        style={[
          stylesLocal.elementLayout2,
          styles.marC,
          styles.padMain,
          stylesLocal.flxRow,
        ]}>
        <Icon name="arrow-down" color="green" size={25} />
        <View style={stylesLocal.marLft}>
          <Text>Transfered from Joshua Lee</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Rp220.000</Text>
        </View>
      </View>
      <View
        style={[
          stylesLocal.elementLayout2,
          styles.padMain,
          stylesLocal.flxRow,
        ]}>
        <Icon name="arrow-up" color="red" size={25} />
        <View style={stylesLocal.marLft}>
          <Text>Netflix subscription</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Rp. 149.000</Text>
        </View>
      </View>
      <Text style={styles.marB}>This Week</Text>
      <View
        style={[
          stylesLocal.elementLayout2,
          styles.marC,
          styles.padMain,
          stylesLocal.flxRow,
        ]}>
        <Icon name="arrow-down" color="green" size={25} />
        <View style={stylesLocal.marLft}>
          <Text>Transfered from Joshua Lee</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Rp220.000</Text>
        </View>
      </View>
      <View
        style={[
          stylesLocal.elementLayout2,
          styles.padMain,
          stylesLocal.flxRow,
        ]}>
        <Icon name="arrow-up" color="red" size={25} />
        <View style={stylesLocal.marLft}>
          <Text>Netflix subscription</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Rp. 149.000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
  marLft: {
    marginLeft: 20,
  },
  textMain: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 26,
  },
  flxRow: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default Notification;
