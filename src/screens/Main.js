import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './Login';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';
import Register from './Register';
import CreatePin from './Create-pin';
import CreatePinSuccess from './Create-pin-success';
import ForgotPassword from './Forgot-password';
import EnterNewPassword from './Enter-new-password';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="HomeStack"
              component={HomeStack}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Create PIN"
              component={CreatePin}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Create Pin Success"
              component={CreatePinSuccess}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Forgot Password"
              component={ForgotPassword}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Enter New Password"
              component={EnterNewPassword}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
