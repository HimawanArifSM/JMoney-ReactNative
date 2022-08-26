import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import styles from '../styles/global';

const EnterNewPassword = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <View style={[styles.mainContent, styles.padA, styles.spaceBetween]}>
        <View>
          <Text style={styles.textMain}>Reset Password</Text>
          <Text style={[styles.textSecondary, styles.marA]}>
            Create and confirm your new password so you can login to Zwallet.{' '}
          </Text>
          <View style={[styles.inputWrapper, styles.marC]}>
            <Input
              placeholder="Create new password"
              icon="lock"
              secure={true}
            />
          </View>
          <View style={[styles.inputWrapper, styles.marC]}>
            <Input
              placeholder="Confirm new password"
              icon="lock"
              secure={true}
            />
          </View>
        </View>
        <View style={[styles.buttonWrapper, styles.marC, styles.padB]}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EnterNewPassword;
