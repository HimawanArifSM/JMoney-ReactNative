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
import Input2 from '../components/Input2';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {updatePhone} from '../redux/actions/profile.js';
import Input3 from '../components/Input3';
import Input from '../components/Input';
import {resetmsg} from '../redux/reducers/profile';

const ChangePhoneSchema = Yup.object().shape({
  phonenumber: Yup.string().required('Required'),
});

const FormPhone = ({handleChange, handleSubmit, val}) => {
  return (
    <>
      <View style={[styles.inputWrapper]}>
        <Input2
          placeholder="Enter your phone number"
          icon="phone"
          type="numeric"
          name="phonenumber"
          onChange={handleChange}
          // value={val.phone}
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

const ChangePhone = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const succesmsg = useSelector(state => state.profile.succesmsg);
  const errormsg = useSelector(state => state.profile.errormsg);
  // console.log(token);
  const submit = val => {
    console.log(val);
    const req = {token: token, phonenumber: val.phonenumber};
    dispatch(updatePhone(req));
    // console.log(val);
    // if (succesmsg !== null) {
    //   navigation.navigate('Manage Phone');
    // }
  };
  React.useEffect(() => {
    if (succesmsg !== null && errormsg === undefined) {
      dispatch(resetmsg());
      navigation.navigate('Manage Phone');
    }
  }, [navigation, succesmsg, dispatch, errormsg]);
  return (
    <View style={[styles.padMain, stylesLocal.spBtwn]}>
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
      </View>
      <Formik
        validationSchema={ChangePhoneSchema}
        initialValues={{phonenumber: ''}}
        onSubmit={submit}>
        {props => <FormPhone {...props} />}
      </Formik>
      {/* <Formik
        initialValues={{phonenumber: ''}}
        validationSchema={ChangePhoneSchema}
        onSubmit={submit}>
        {({errors, handleChange, handleSubmit, values, isValid}) => (
          <>
            <View style={[styles.inputWrapper]}>
              <Input3
                placeholder="Enter your phone number"
                icon="phone"
                type="numeric"
                name="phonenumber"
                onChange={handleChange('phonenumber')}
                value={values.phonenumber}
              />
            </View>
            {errors.phonenumber && <Text>{errors.phonenumber}</Text>}
            <View style={stylesLocal.marTop}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={stylesLocal.btnOne}>
                <Text>Continue</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik> */}
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  marTop: {
    marginVertical: 20,
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

export default ChangePhone;
