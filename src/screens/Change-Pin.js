import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import {checkPin} from '../redux/actions/profile';
import {resetmsg} from '../redux/reducers/profile';

const ChangePin = ({navigation}) => {
  const dispatch = useDispatch();
  const successmsg = useSelector(state => state.profile.successmsg);
  const token = useSelector(state => state.auth.token);
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
  React.useEffect(() => {
    if (successmsg === 'match') {
      dispatch(resetmsg());
      navigation.navigate('New PIN');
    }
  }, [successmsg, navigation, dispatch]);

  return (
    <View>
      <View style={stylesLocal.header} />
      <View>
        <View style={styles.marA}>
          <Text style={styles.textSecondary}>
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
          </Text>
        </View>
      </View>
      <ReactNativePinView
        inputViewFilledStyle={{backgroundColor: PRIMARY_COLOR}}
        buttonViewStyle={{backgroundColor: SECONDARY_COLOR}}
        buttonTextStyle={{color: TEXT_DARK, fontSize: 32}}
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
            setShowCompletedButton(!showCompletedButton);
            // console.log(enteredPin);
            const request = {token: token, pin: enteredPin};
            dispatch(checkPin(request));
          }
        }}
        customLeftButton={
          showRemoveButton ? (
            <Icon name={'ios-backspace'} size={36} color={TEXT_DARK} />
          ) : undefined
        }
        customRightButton={
          showCompletedButton ? (
            <Icon name={'checkmark-outline'} size={36} color={TEXT_DARK} />
          ) : undefined
        }
      />
      {/* <View style={[styles.button, styles.marC]}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View> */}
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

export default ChangePin;
