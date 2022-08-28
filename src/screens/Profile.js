import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import BtnProfile from '../components/BtnProfile';

const Profile = () => {
  return (
    <View style={styles.padMain}>
      <View style={stylesLocal.profhead}>
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.profEdt}>
          <Icon name="pencil" size={10} />
          <Text style={styles.textSecondary}>Edit</Text>
        </View>
        <Text style={styles.marA}>Robert Chandler</Text>
        <Text style={styles.marA}>Phone Number</Text>
      </View>
      <BtnProfile text="Personal Information" icon="arrow-right" />
      <BtnProfile text="Change Password" icon="arrow-right" />
      <BtnProfile text="Change Pin" icon="arrow-right" />
      <BtnProfile text="Notification" />
      <BtnProfile text="Logout" />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  pict: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  profhead: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  profEdt: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Profile;
