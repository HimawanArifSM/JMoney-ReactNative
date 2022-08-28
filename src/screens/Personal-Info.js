import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {SECONDARY_COLOR} from '../styles/constant';
import styles from '../styles/global';

const PersonalInfo = () => {
  return (
    <View style={styles.padMain}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
        </View>
        <View style={[stylesLocal.elementLayout2, styles.marA, styles.padMain]}>
          <Text>First Name</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Robert</Text>
        </View>
        <View style={[stylesLocal.elementLayout2, styles.marA, styles.padMain]}>
          <Text>Second Name</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>Chandler</Text>
        </View>
        <View style={[stylesLocal.elementLayout2, styles.marA, styles.padMain]}>
          <Text>Email</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>
            email@mail.com
          </Text>
        </View>
        <View
          style={[
            stylesLocal.elementLayout2,
            styles.marA,
            styles.padMain,
            stylesLocal.flxRow,
          ]}>
          <View>
            <Text>Phone Number</Text>
            <Text style={[stylesLocal.textMain, styles.marA]}>
              +62 812-2131-2321
            </Text>
          </View>
          <Text style={styles.textSecondary}>Manage</Text>
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
});

export default PersonalInfo;
