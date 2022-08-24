import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import Input from '../components/Input';

const CreatePinSuccess = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <View style={[styles.mainContent, styles.padA, styles.spaceBetween]}>
        <View>
          <Text style={styles.textMain}>PIN Successfully Created</Text>
          <Text style={[styles.textSecondary, styles.marA]}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring!{' '}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, styles.marC, styles.padB]}>
          <TouchableOpacity>
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
