import {View, Text, Alert, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/global.js';
import Input from '../components/Input.js';

function Login() {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onSubmit = () => {
    if (
      email === 'admin@mail.com' &&
      password === 'admin' &&
      fullName === 'admin pertama'
    ) {
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
      <ScrollView style={[styles.mainContent, styles.padA]}>
        <Text style={styles.textMain}>Sign Up</Text>
        <Text style={[styles.textSecondary, styles.marA]}>
          Create your account to access Zwallet.
        </Text>
        <View style={[styles.inputWrapper, styles.marB]}>
          <Input
            onChange={text => setFullName(text)}
            placeholder="Full Name"
            icon="user"
            type="number-pad"
          />
        </View>
        <View style={[styles.inputWrapper, styles.marB]}>
          <Input
            onChange={text => setEmail(text)}
            placeholder="Email"
            icon="envelope"
            type="email-address"
          />
        </View>
        <View style={[styles.inputWrapper, styles.marB]}>
          <Input
            onChange={text => setPassword(text)}
            placeholder="Password"
            icon="lock"
            secure={true}
          />
        </View>
        <View style={[styles.buttonWrapper, styles.padA]}>
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[styles.textSecondary, styles.marA]}>
          Already have an account? Let's Login
        </Text>
      </ScrollView>
    </ScrollView>
  );
}

export default Login;
