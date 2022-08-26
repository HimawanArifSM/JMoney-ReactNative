import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/global';
import ReactNativePinView from 'react-native-pin-view';
// import PinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';

const CreatePin = () => {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
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
          ref={pinView}
          pinLength={6}
          buttonSize={60}
          onValueChange={value => setEnteredPin(value)}
          onButtonPress={key => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              alert('Entered Pin: ' + enteredPin);
            }
            if (key === 'three') {
              alert("You can't use 3");
            }
          }}
          customLeftButton={
            showRemoveButton ? (
              <Icon name={'ios-backspace'} size={36} color={'#FFF'} />
            ) : undefined
          }
          customRightButton={
            showCompletedButton ? (
              <Icon name={'ios-unlock'} size={36} color={'#FFF'} />
            ) : undefined
          }
        />
        {/* <View style={[styles.buttonWrapper, styles.marC]}>
          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default CreatePin;
