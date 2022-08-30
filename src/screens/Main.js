import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Login';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeStack"
          component={HomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
