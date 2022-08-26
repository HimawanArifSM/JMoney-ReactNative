import React from 'react';
import CreatePin from './src/screens/Create-pin';
import CreatePinSuccess from './src/screens/Create-pin-success';
import EnterNewPassword from './src/screens/Enter-new-password';
import ForgotPassword from './src/screens/Forgot-password';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Forgot-password"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Enter-new-password"
          component={EnterNewPassword}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Create-pin"
          component={CreatePin}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Create-pin-success"
          component={CreatePinSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
