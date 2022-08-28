import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR} from '../styles/constant';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';

const Confirmation = () => {
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
    <View>
      <View style={stylesLocal.header} />
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
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  header: {
    backgroundColor: PRIMARY_COLOR,
    height: Dimensions.get('screen').height * (5 / 100),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
  },
});

export default Confirmation;
