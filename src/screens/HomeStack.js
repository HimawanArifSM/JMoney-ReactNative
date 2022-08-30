import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTab from './HomeTab';
import Notification from './Notification';
import Profile from './Profile';
import SearchReceiver from './SearchReceiver';
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

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTab"
        component={HomeTab}
      />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Transfer" component={SearchReceiver} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Input Transfer" component={InputAmount} />
      <Stack.Screen name="Transfer Success" component={Success} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PIN Confirmation" component={PINConfirmation} />
      <Stack.Screen name="Personal Information" component={PersonalInfo} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
      <Stack.Screen name="Change PIN" component={ChangePin} />
      <Stack.Screen name="Manage Phone" component={ManagePhone} />
      <Stack.Screen name="Change Phone" component={ChangePhone} />
    </Stack.Navigator>
  );
};

export default HomeStack;
