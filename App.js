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
import Details from './src/screens/Details';
import {PRIMARY_COLOR} from './src/styles/constant';
import History from './src/screens/History';
import SearchReceiver from './src/screens/SearchReceiver';
import InputAmount from './src/screens/Input-amount';
import Confirmation from './src/screens/Confirmation';
import EnterPin from './src/screens/Enter-Pin';
import Success from './src/screens/Success';
import Failed from './src/screens/Failed';
import Topup from './src/screens/Topup';
import Profile from './src/screens/Profile';
import PersonalInfo from './src/screens/Personal-Info';
import ChangePassword from './src/screens/Change-Password';
import ChangePin from './src/screens/Change-Pin';
import ChangePhone from './src/screens/Change-Phone';
import ManagePhone from './src/screens/Manage-Phone';
import Notification from './src/screens/Notification';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Failed"
          component={Failed}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Success"
          component={Success}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Enter Pin"
          component={EnterPin}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Confirmation"
          component={Confirmation}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Input Amount"
          component={InputAmount}
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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="History"
          component={History}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: PRIMARY_COLOR,
            },
          }}
          name="Find Receiver"
          component={SearchReceiver}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
