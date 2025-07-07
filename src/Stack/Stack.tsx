import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Auth/Splash/Splash';
import Login from '../Screens/Auth/Login/Login';
import Register from '../Screens/Auth/Register/Register';
import { LogBox } from 'react-native';
import TwoStepVerifiction from '../Screens/Auth/2StepVerification/2StepVerification';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import DrawerStack from './Drawer/Drawer';
import OrderTracking from '../Screens/Order/OrderTracking/OrderTracking';
LogBox.ignoreAllLogs();

export type RootStackParamList = {
  splash: undefined;
  Login: undefined;
  Register: undefined;
  TwoStepVerifiction?: undefined;
  HomeScreen?: undefined;
  DrawerStack?: undefined;
  OrderTracking?: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TwoStepVerifiction"
        component={TwoStepVerifiction}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTracking}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
