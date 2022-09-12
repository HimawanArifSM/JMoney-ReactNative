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
import {updatePhone} from '../redux/actions/profile';
import Input3 from '../components/Input3';

const ChangePhoneSchema = Yup.object().shape({
  phonenumber: Yup.string().min(11).max(13).required('Required'),
});

const FormPhone = ({handleChange, handleSubit, val}) => {
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
        <TouchableOpacity onPress={handleSubit} style={stylesLocal.btnOne}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const ChangePhone = ({navigatation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const succesmsg = useSelector(state => state.profile.succesmsg);
  const submit = val => {
    const data = {token: token, phonenumber: val.phonenumber};
    dispatch(updatePhone(data));
    console.log(val);
  };
  React.useEffect(() => {
    if (succesmsg) {
      navigatation.navigate('Manage Phone');
    }
  }, [navigatation, succesmsg]);
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
      {/* <Formik
        validationSchema={ChangePhoneSchema}
        initialValues={{phonenumber: ''}}
        onSubmit={submit}>
        {props => <FormPhone {...props} />}
      </Formik> */}
      <Formik
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
      </Formik>
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
