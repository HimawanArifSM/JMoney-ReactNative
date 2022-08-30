import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import BtnProfile from '../components/BtnProfile';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={[stylesLocal.pdbtm]}>
      <View style={stylesLocal.profhead}>
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.profEdt}>
          <Icon name="pencil" size={10} />
          <Text style={styles.textSecondary}>Edit</Text>
        </View>
        <Text style={styles.marA}>Robert Chandler</Text>
        <Text style={styles.marA}>Phone Number</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Personal Information')}>
        <BtnProfile text="Personal Information" icon="arrow-right" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Change Password')}>
        <BtnProfile text="Change Password" icon="arrow-right" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Change PIN')}>
        <BtnProfile text="Change Pin" icon="arrow-right" />
      </TouchableOpacity>
      <BtnProfile text="Notification" />
      <TouchableOpacity>
        <BtnProfile text="Logout" />
      </TouchableOpacity>
    </ScrollView>
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
  pdbtm: {
    paddingHorizontal: 10,
    // paddingBottom: 100,
  },
});

export default Profile;
