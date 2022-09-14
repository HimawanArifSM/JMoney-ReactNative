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
import {useSelector} from 'react-redux';

const PersonalInfo = ({navigation}) => {
  const data = useSelector(state => state.profile.data);
  const phone = data?.phonenumber?.slice(1);
  const sName = data.fullname.split(' ');
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
          <Text style={[stylesLocal.textMain, styles.marA]}>{sName[0]}</Text>
        </View>
        <View style={[stylesLocal.elementLayout2, styles.marA, styles.padMain]}>
          <Text>Second Name</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>
            {sName.slice(1)}
          </Text>
        </View>
        <View style={[stylesLocal.elementLayout2, styles.marA, styles.padMain]}>
          <Text>Email</Text>
          <Text style={[stylesLocal.textMain, styles.marA]}>{data.email}</Text>
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
            <Text style={[stylesLocal.textMain, styles.marA]}>+62 {phone}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Manage Phone')}>
            <Text style={styles.textSecondary}>Manage</Text>
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
