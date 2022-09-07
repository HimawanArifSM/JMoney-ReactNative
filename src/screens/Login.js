import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/global.js';
import Input from '../components/Input.js';
import {login} from '../redux/actions/auth.js';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email Format').required('Required'),
  password: Yup.string().required('Required'),
});

const FormLogin = ({errors, handleChange, handleSubmit, navigation}) => {
  return (
    <>
      <View style={[styles.inputWrapper, styles.marB]}>
        <Input
          onChange={handleChange}
          placeholder="Email"
          icon="envelope"
          type="email-address"
          name="email"
        />
      </View>
      <View style={[styles.inputWrapper, styles.marC]}>
        <Input
          onChange={handleChange}
          placeholder="Password"
          icon="lock"
          secure={true}
          name="password"
          type="text"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
        <Text style={[styles.textRight, styles.marA, styles.colorPrim]}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <View style={[styles.buttonWrapper, styles.marC]}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={[styles.textSecondary, styles.marA]}>
          Don't have an account? Let's
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.textSecondary, styles.colorPrim]}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

const Login = ({navigation}) => {
  // const token = useSelector(state => state.auth.token);
  // console.log(token);
  // const dispatch = useDispatch();
  // const onLogin = val => {
  //   const email = val.email;
  //   const password = val.password;
  //   const req = {email, password};
  //   console.log(req);
  //   dispatch(login(req));
  // };
  // React.useEffect(() => {
  //   if (token) {
  //     navigation.navigate('HomeTab');
  //   }
  // }, [navigation, token]);
  // const onLogin = async value => {
  //   try {
  //     const result = await axios.post('auth/login', value);
  //     AsyncStorage.set('token', result.data.data.token);
  //     if (AsyncStorage.get('token') !== null) {
  //       navigation.navigate('HomeTab');
  //     }
  //   } catch (e) {
  //     console.log(e.result);
  //     //window.alert(e.response.data.msg);
  //   }
  // };
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth?.token);
  //const navigate = useNavigate();

  const onLogin = value => {
    const data = {email: value.email, password: value.password};
    dispatch(login(data));
    console.log(data);
  };

  React.useEffect(() => {
    if (token) {
      navigation.navigate('HomeTab');
    }
  }, [navigation, token]);
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <View style={[styles.mainContent, styles.padA]}>
        <Text style={styles.textMain}>Login</Text>
        <Text style={[styles.textSecondary, styles.marA]}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
      </View>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={onLogin}>
        {props => <FormLogin {...props} navigation={navigation} />}
      </Formik>
    </ScrollView>
  );
};

export default Login;
