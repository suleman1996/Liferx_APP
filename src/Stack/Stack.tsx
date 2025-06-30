import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash';
import { LogBox } from 'react-native';
import Tabs from '../BottomTab/BottomTab';
import Login from '../Screens/Login/Login';
import HomeScreen from '../Components/Homescreen/Homescreen';

LogBox.ignoreAllLogs();
const Stack: React.FC<any> = () => {
  const stack = createNativeStackNavigator();

  return (
    <stack.Navigator initialRouteName="splash">
      <stack.Screen
        name="splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* <stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <stack.Screen
        name="tab"
        component={Tabs}
        options={{ headerShown: false }}
      /> */}
    </stack.Navigator>
  );
};

export default Stack;
