import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Icon from 'react-native-vector-icons/AntDesign';
import {PRIMARY_COLOR} from '../styles/constant';

const CreatePinSuccess = ({navigation}) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <View style={[styles.mainContent, styles.padA, styles.spaceBetween]}>
        <View>
          <View style={styles.center}>
            <Icon name="checkcircle" size={69} color={PRIMARY_COLOR} />
          </View>
          <Text style={[styles.textMain, styles.marC]}>
            PIN Successfully Created
          </Text>
          <Text style={[styles.textSecondary, styles.marA]}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring!{' '}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, styles.marC, styles.padB]}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreatePinSuccess;
