import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import styles from '../styles/global';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const onSubmit = () => {
    if (email === 'admin@mail.com') {
      Alert.alert('Success', 'Email registered', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Enter-new-password');
          },
        },
      ]);
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
      <View style={[styles.mainContent, styles.padA, styles.spaceBetween]}>
        <View>
          <Text style={styles.textMain}>Reset Password</Text>
          <Text style={[styles.textSecondary, styles.marA]}>
            Enter your Zwallet e-mail so we can send you a password reset link.
          </Text>
          <View style={[styles.inputWrapper, styles.marB]}>
            <Input
              onChange={text => setEmail(text)}
              placeholder="Enter Your Email"
              icon="envelope"
              type="email-address"
            />
          </View>
        </View>
        <View style={[styles.buttonWrapper, styles.marC, styles.padB]}>
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
