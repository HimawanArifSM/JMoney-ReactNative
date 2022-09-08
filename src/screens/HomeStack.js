import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTab from './HomeTab';
import Notification from './Notification';
import Details from './Details';
import InputAmount from './Input-amount';
import Success from './Success';
import History from './History';
import Confirmation from './Confirmation';
import PINConfirmation from './Enter-Pin';
import PersonalInfo from './Personal-Info';
import ChangePassword from './Change-Password';
import ChangePin from './Change-Pin';
import ManagePhone from './Manage-Phone';
import ChangePhone from './Change-Phone';
import CreatePin from './Create-pin';
import {PRIMARY_COLOR} from '../styles/constant';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTab"
        component={HomeTab}
      />
      {/* <Stack.Screen name="Create PIN" component={CreatePin} /> */}
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Input Transfer"
        component={InputAmount}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Transfer Success"
        component={Success}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="PIN Confirmation"
        component={PINConfirmation}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Personal Information"
        component={PersonalInfo}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Change PIN"
        component={ChangePin}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Manage Phone"
        component={ManagePhone}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
      <Stack.Screen
        name="Change Phone"
        component={ChangePhone}
        options={{headerStyle: {backgroundColor: PRIMARY_COLOR}}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
