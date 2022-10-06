import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/global';
import BtnProfile from '../components/BtnProfile';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/reducers/auth';
import {getUserLogin, updateProfile} from '../redux/actions/profile';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import {resetmsg} from '../redux/reducers/profile';

const Profile = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [fullname, setFullname] = React.useState('');
  const data = useSelector(state => state.profile.data);
  const token = useSelector(state => state.auth.token);
  const successMsg = useSelector(state => state.profile.successmsg);
  console.log(successMsg);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logOut());
  };
  const submit = () => {
    dispatch(resetmsg);
    const request = {token: token, fullname: fullname};
    dispatch(updateProfile(request));
  };
  React.useEffect(() => {
    dispatch(getUserLogin(token));
    dispatch(resetmsg);
  }, [dispatch, token]);
  return (
    <ScrollView style={[stylesLocal.pdbtm]}>
      <View style={stylesLocal.profhead}>
        <Image source={{uri: data?.picture}} style={stylesLocal.pict} />
        {/* <View style={stylesLocal.pict} /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit Photo')}
          style={stylesLocal.profEdt}>
          <Icon name="pencil" size={10} />
          <Text style={styles.textSecondary}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Text style={styles.marA}>{data.fullname}</Text>
        </TouchableOpacity>
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={successMsg ? !show : show}
        onRequestClose={() => setShow(!show)}
        style={stylesLocal.br}>
        <View style={stylesLocal.modal}>
          <View style={stylesLocal.wrapModal}>
            <Text style={stylesLocal.titleModal}>Enter Your Full Name</Text>
            <TextInput
              style={stylesLocal.input}
              keyboardType="email"
              placeholder="Your full name"
              value={fullname}
              onChangeText={setFullname}
            />
            <View style={stylesLocal.wrapButton}>
              <TouchableOpacity
                style={stylesLocal.cancel}
                onPress={() => setShow(!show)}>
                <Text style={stylesLocal.acount}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={stylesLocal.topUp}
                onPress={() => submit()}>
                <Text style={stylesLocal.acount}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const stylesLocal = StyleSheet.create({
  topUp: {
    height: 30,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    elevation: 6,
  },
  cancel: {
    height: 30,
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    elevation: 6,
  },
  wrapButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imaging: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    // borderRadius: 15,
  },
  titleModal: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    marginBottom: 30,
    color: TEXT_DARK,
  },
  wrapModal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 2,
    margin: 50,
    elevation: 4,
    borderRadius: 15,
  },
  pict: {
    width: 80,
    height: 80,
    borderRadius: 10,
    // backgroundColor: 'black',
  },
  profhead: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
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
  br: {
    borderRadius: 15,
  },
});

export default Profile;
