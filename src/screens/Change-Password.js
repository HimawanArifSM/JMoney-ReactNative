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
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../redux/actions/profile';
import {resetmsg} from '../redux/reducers/profile';

const ChangePassSchema = Yup.object().shape({
  oldPassword: Yup.string().min(8).required('Required'),
  password: Yup.string().min(8).required('Required'),
  repeatPassword: Yup.string().min(8).required('Required'),
});

const FormPassword = ({handleChange, handleSubmit}) => {
  return (
    <>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input
          placeholder="Current Password"
          icon="lock"
          secure={true}
          type="text"
          name="oldPassword"
          onChange={handleChange}
        />
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input
          placeholder="New Password"
          icon="lock"
          secure={true}
          name="password"
          type="text"
          onChange={handleChange}
        />
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input
          placeholder="Repeat Password"
          icon="lock"
          secure={true}
          name="repeatPassword"
          type="text"
          onChange={handleChange}
        />
      </View>
      <View style={stylesLocal.marTop}>
        <TouchableOpacity onPress={handleSubmit} style={stylesLocal.btnOne}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const successmsg = useSelector(state => state.profile.successmsg);
  const onSubmit = value => {
    const data = {
      token: token,
      oldPassword: value.oldPassword,
      password: value.password,
      repeatPassword: value.repeatPassword,
    };
    dispatch(changePassword(data));
  };
  React.useEffect(() => {
    if (successmsg) {
      dispatch(resetmsg());
      navigation.navigate('Profile');
    }
  });
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
      <Formik
        validationSchema={ChangePassSchema}
        initialValues={{oldPassword: '', password: '', repeatPassword: ''}}
        onSubmit={onSubmit}>
        {props => <FormPassword {...props} />}
      </Formik>
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
