import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles/global';
import ReactNativePinView from 'react-native-pin-view';
import PinView from 'react-native-pin-view';

const CreatePin = () => {
  const onSubmit = () => {};
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <View style={[styles.mainContent, styles.padA]}>
        <Text style={styles.textMain}>Create Security PIN</Text>
        <Text style={[styles.textSecondary, styles.marA]}>
          Create a PIN that's contain 6 digits number for security purpose in
          Zwallet.
        </Text>
        <ReactNativePinView
          inputSize={32}
          ref={PinView}
          pinLength={6}
          buttonSize={60}
        />
        <View style={[styles.buttonWrapper, styles.marC]}>
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

export default CreatePin;
