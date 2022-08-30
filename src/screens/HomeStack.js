import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTab from './HomeTab';
import Notification from './Notification';
import Profile from './Profile';
import SearchReceiver from './SearchReceiver';
import Details from './Details';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
