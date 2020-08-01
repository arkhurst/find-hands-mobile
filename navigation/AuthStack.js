import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding/Onboarding';
import Welcome from '../screens/Onboarding/Welcome';
import Login from '../screens/Onboarding/Login';
// import AppRoutes from '../components/AppRoutes';

const Stack = createStackNavigator();
// const AuthenticationStack = createStackNavigator(AppRoutes)

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={'Onboarding'} component={Onboarding} />
      <Stack.Screen name={'Welcome'} component={Welcome} />
      <Stack.Screen name={"Login"} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;