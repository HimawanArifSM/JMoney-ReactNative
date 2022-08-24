import {View, Text, Alert, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/global.js';
import Input from '../components/Input.js';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    if (email === 'admin@mail.com' && password === 'admin') {
      Alert.alert('Success', 'Login Success');
    } else {
      Alert.alert('Error', 'Wrong username or password');
    }
    // console.log('Hello from login')
  };
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
        <View style={[styles.inputWrapper, styles.marB]}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Email"
            icon="envelope"
            type="email-address"
          />
        </View>
        <View style={[styles.inputWrapper, styles.marC]}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Password"
            icon="lock"
            secure={true}
          />
        </View>
        <Text style={[styles.textRight, styles.marA]}>Forgot password?</Text>
        <View style={[styles.buttonWrapper, styles.marC]}>
          <TouchableOpacity onPress={onLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[styles.textSecondary, styles.marA]}>
          Don't have an account? Let's Sign Up
        </Text>
      </View>
    </ScrollView>
  );
}

export default Login;
