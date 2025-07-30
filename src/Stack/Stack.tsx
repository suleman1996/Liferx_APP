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
import ChangePassword from '../Screens/Profile/ChangePassword/ChangePassword';
import UpdateAccountDetail from '../Screens/Profile/UpdateAccountDetail/UpdateAccountDetail';
import BottomTabs from './BottomTab/BottomTab';
import Profile from '../Screens/Profile/Profile';
import DecidingQuestions from '../Screens/DecidingQuestions/DecidingQuestions';
import SelectState from '../Screens/SelectState/SelectState';
import Questionaire from '../Screens/Questionaire/Questionaire';
import PersonalInformation from '../Screens/PersonalInformation/PersonalInformation';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneVerification from '../Screens/PhoneVerification/PhoneVerification';
import OtpPhoneVerify from '../Screens/OtpPhoneVerify/OtpPhoneVerify';
import SuggestMedicine from '../Screens/SuggestMedicine/SuggestMedicine';
import SelectDosage from '../Screens/SelectDosage/SelectDosage';
import { RootState } from '../Store';
import { useSelector } from 'react-redux';
import DosageVarient from '../Screens/DosageVarient/DosageVarient';
import SelectPlans from '../Screens/SelectPlans/SelectPlans';
LogBox.ignoreAllLogs();

export type RootStackParamList = {
  splash: undefined;
  Login: undefined;
  Register: undefined;
  TwoStepVerifiction?: undefined;
  HomeScreen?: undefined;
  DrawerStack?: undefined;
  ChangePassword?: undefined;
  UpdateAccountDetail?: undefined;
  BottomTab?: undefined;
  Profile?: undefined;
  DecidingQuestions?: undefined;
  SelectState?: undefined;
  Questionaire?: undefined;
  PersonalInformation?: undefined;
  PhoneVerification?: undefined;
  OtpPhoneVerify?: undefined;
  SuggestMedicine?: undefined;
  SelectDosage?: {
    productId: string;
  };
  DosageVarient?: {
    selectedDosageItem: any;
    productId: string;
  };
  SelectPlans: {
    selectedDosageVarientByList: any;
    productId: string;
    selectedDosageItem: any;
  };
  OrderTracking?: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateAccountDetail"
          component={UpdateAccountDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DecidingQuestions"
          component={DecidingQuestions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectState"
          component={SelectState}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Questionaire"
          component={Questionaire}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpPhoneVerify"
          component={OtpPhoneVerify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuggestMedicine"
          component={SuggestMedicine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectDosage"
          component={SelectDosage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DosageVarient"
          component={DosageVarient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectPlans"
          component={SelectPlans}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
        {/* <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{ headerShown: false }}
      /> */}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AppStack;
