import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/global';
import ReactNativePinView from 'react-native-pin-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {PRIMARY_COLOR, SECONDARY_COLOR, TEXT_DARK} from '../styles/constant';
import {createPin} from '../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {resetmsg} from '../redux/reducers/auth';
import {Formik} from 'formik';
import {nothing} from 'immer';

const FormPin = ({handleSubmit, setPin, pin}) => {
  const pinView = React.useRef(null);
  const [showRemoveButton, setShowRemoveButton] = React.useState(false);
  const [showCompletedButton, setShowCompletedButton] = React.useState(false);
  useEffect(() => {
    if (pin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (pin.length === 6) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [pin]);
  return (
    <ReactNativePinView
      inputSize={32}
      ref={pinView}
      pinLength={6}
      buttonSize={60}
      inputViewFilledStyle={{backgroundColor: PRIMARY_COLOR}}
      buttonViewStyle={{backgroundColor: SECONDARY_COLOR}}
      buttonTextStyle={{color: TEXT_DARK, fontSize: 32}}
      onValueChange={value => setPin(value)}
      onButtonPress={key => {
        if (key === 'custom_left') {
          pinView.current.clear();
        }
        if (key === 'custom_right') {
          setShowCompletedButton(!showCompletedButton);
        }
      }}
      customLeftButton={
        showRemoveButton ? (
          <Icon name={'ios-backspace'} size={36} color={TEXT_DARK} />
        ) : undefined
      }
      customRightButton={
        showCompletedButton ? (
          <TouchableOpacity onPress={handleSubmit}>
            <Icon name={'checkmark-outline'} size={36} />
          </TouchableOpacity>
        ) : undefined
      }
    />
  );
};

const CreatePin = ({navigation}) => {
  const dispatch = useDispatch();
  const [pin, setPin] = React.useState('');
  const successmsg = useSelector(state => state.auth.successmsg);

  const email = useSelector(state => state.auth.email);

  const onSubmit = val => {
    console.log(pin);
    const request = {email, pin: pin};
    dispatch(createPin(request));
  };

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
        <Formik initialValues={{pin: pin}} onSubmit={onSubmit}>
          {props => <FormPin {...props} setPin={setPin} pin={pin} />}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default CreatePin;
