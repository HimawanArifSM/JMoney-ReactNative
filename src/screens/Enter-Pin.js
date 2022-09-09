import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {resetmsg} from '../redux/reducers/transactions';
import {transfer} from '../redux/actions/transaction';

const PINConfirmation = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const successmsg = useSelector(state => state.transactions.successmsg);
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const amount = useSelector(state => state.transactions.amount);
  const notes = useSelector(state => state.transactions.notes);
  const recipient_id = useSelector(state => state.transactions.receiver);
  const time = useSelector(state => state.transactions.date);
  const type_id = 18;
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
    dispatch(resetmsg());
    if (successmsg) {
      navigation.navigate('Transfer Success');
    }
  }, [successmsg, navigation, dispatch]);

  return (
    <View>
      <View style={stylesLocal.header} />
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
            const request = {
              amount,
              notes,
              recipient_id,
              time,
              type_id,
              pin: enteredPin,
            };
            dispatch(transfer({token, request}));
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
      {/* <View style={[styles.button, styles.marC, stylesLocal.mid]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transfer Success')}>
          <View>
            <Text style={styles.buttonText}>Continue</Text>
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
  mid: {
    alignSelf: 'center',
  },
});

export default PINConfirmation;
