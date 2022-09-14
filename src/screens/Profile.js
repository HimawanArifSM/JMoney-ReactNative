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
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/reducers/auth';
import {getUserLogin} from '../redux/actions/profile';

const Profile = ({navigation}) => {
  const data = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logOut());
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
  }, [dispatch, token]);
  return (
    <ScrollView style={[stylesLocal.pdbtm]}>
      <View style={stylesLocal.profhead}>
        <View style={stylesLocal.pict} />
        <View style={stylesLocal.profEdt}>
          <Icon name="pencil" size={10} />
          <Text style={styles.textSecondary}>Edit</Text>
        </View>
        <Text style={styles.marA}>{data.fullname}</Text>
        <Text style={styles.marA}>+62 {data.phonenumber.slice(1)}</Text>
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
      <TouchableOpacity onPress={exit}>
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
