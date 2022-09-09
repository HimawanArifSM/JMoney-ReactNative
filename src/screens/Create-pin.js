import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/global';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import {createPin} from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {resetmsg} from '../redux/reducers/auth';

const CreatePin = ({navigation}) => {
  const dispatch = useDispatch();
  const successmsg = useSelector(state => state.auth.successmsg);
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

  const email = useSelector(state => state.auth.email);
  React.useEffect(() => {
    dispatch(resetmsg());
    if (successmsg) {
      navigation.navigate('Create Pin Success');
    }
  }, [successmsg, navigation, dispatch]);

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
              const request = {email, pin: enteredPin};
              dispatch(createPin(request));
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
      </View>
    </ScrollView>
  );
};

export default CreatePin;
